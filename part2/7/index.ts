// Generics

// 함수에 타입도 파라미터로 입력가능
// array 입력하면 첫 자료 return 해주는 함수
// function 함수(x :unknown[]){
//   return x[0]
// }
// // a는 언노운 타입
// let a = 함수([4,2])
// console.log(a) // 4
// 위에 해결책은?
// 1. 여기서 narrowing 하거나 as 쓰거나 그러면 된다.(귀찮음)

// 2. Generic 함수 만들기 (파마리터로 타입을 입력하는 함수)
function 함수<MyType>(x: MyType[]): MyType {
  return x[0];
}
// a는 언노운 타입
let a = 함수<number>([4, 2]); // 타입을 파라미터로 입력할 수 있는 문법.
console.log(a);
// eneric 함수장점 : 확장성이 조금 있어보임
// 매번 다른 타입 출력가능
// (참고) 타입파라미터 가끔 자동으로 유추함
let b = 함수<string>(["4", "2"]);

// 숫자 집어넣으면 -1 해서 return 해주는 함수
// extends를 사용해서 타입파라미터 제한두기(체크한다는 개념)
function 함수1<MyType1 extends number>(x: MyType1) {
  return x - 1;
}
//  let a1 = 함수1<number>(100); // x가 숫자가 아니라 빼주지 않는다. x는 아직 불확실함
let a1 = 함수1<number>(100);

//커스텀 타입으로도 타입파라미터 제한가능
interface LengthCheck {
  length: number;
}
function 함수3<MyType2 extends LengthCheck>(x: MyType2) {
  return x.length; // string의 글자수 또는 array의 자료 갯수를 세어줌
}

let a = 함수3<string[]>(["100"]);

// 오늘 배운 내용
// 1. 함수에 타입파라미터 넣을 수 있음
// 2. extends 키워드로 넣을 수 있는 타입 제한가능
// 3. class에도 타입파라미터를 넣을 수 있음
