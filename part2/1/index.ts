// ...rest parameter 잠깐 개념 설명
// 점3개 붙이면 rest parameter이다.
// 파라미터 100만개 만들어올 수 있다는 뜻
// 다른 파라미터 있으면 맨 뒤에만 사용가능

// function 함수(num, ...a) {
// }
// 함수(1, 2, 3, 4, 5, 6);

// function 함수(...a) {
//   console.log(a);
// }
// 함수(1, 2, 3, 4, 5, 6); // rest parameter 자리에 들어온 데이터는 전부[]에 담아줌

// Q. rest parameter 타입지정은 어떻게?
// type이 number만 들어올 수 있다고 과정하면
// 문자 or boolean도 들어 올 수 있다면?
// function 함수(...a: number[] | string[]) {
//   console.log(a);
// }
// 함수(1, 2, 3, 4, 5, 6);

//   ...spread operator 잠깐 상식
// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = [...arr, ...arr2]; //괄호 벗겨주세요 문법
// console.log(arr3); // 1,2,3,4,5

// destrucuring 개념설명
let arr = ["안녕", 100]; // 이 자료들을 변수로 빼서 쓰고싶으면?
// 쉽게 빼줄 수 있음
let [변수1, 변수2] = ["hi", 200];
console.log(변수1);
//object 버전
let { student: student, age: age } = { student: true, age: 20 };
//함수 파라미터에 destructuring 가능
// let object = {student:true, age:20}
// function 함수(a,b){
//     console.log(a,b)
// }
// 함수(object.student,object.age)

// destructuring 쓰면 object 넣기 쉬워짐
// (상식)파라미터만들기 == 변수만들기

function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
함수({ student: true, age: 20 });

// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈 

function MaxNumber(...x:number[]){
    let result = 0;  // 변수를 하나 만든다.
    // 반복문을 써서 파라미터로 들어온 숫자를 계속 result와 비교
    x.forEach((i)=>{
        for (result < i){
            result = i
        }
    })
    // 반복문이 끝나면 result를 return
    return result;
}

console.log(MaxNumber(4,6,3,2))

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// function test2({user, comment, admin}:{user:string, comment:number[], admin:boolean}){
//     console.log(user, comment, admin)
// }

// test2( { user : 'kim', comment : [3,5,4], admin : false } )

type UserType = {
    user : string,
    comment : number[],
    admin : boolean
  }
  
  function 함수2({user, comment, admin} :UserType) :void{
    console.log(user, comment, admin)
  }
  
  함수2({ user : 'kim', comment : [3,5,4], admin : false }) 

//   (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 어떻게 코드를 짜야할까요???
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
type Array = (number|string|boolean)[];

function Test3([a,b,c]:Array){
    console.log(a,b,c)
}

Test3( [40, 'wine', false] )