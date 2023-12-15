// 함수는 파라미터, 리턴값 타입지정가능
function 함수(x: number): number {
  return x * 2;
}
함수(6);

// 함수에서 void 타입 활용가능
// 실수로 뭔가 return하는걸 사전에 막아준다(void)
// js와 다른점 
function 함수1(x:number) :void {
  return 1+1
}

// 타입지정된 파라미터는 필수이다.
// 파라미터가 옵션일 경우엔 파라미터변수? : 타입
// ? 연산자는 들어올수도 있다~ 라는 뜻이긴한데 number|undefined와 같음
function 함수2(x? :number) :void {
}

함수2()

// Q. 이 함수는 왜 이럴까요
// string + number(가능)
// number + number(가능)
// 이외엔 불가능
// 애매한 타입들은 미리 타입검사필요
// function 함수3(x : number | string ){
// console.log(x + 3) => 에러 발생
// }

// 네로인 하자
function 함수3(x : number|string){
  if(){
    console.log(x + 3)
  }
}

// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다. 

// function hello(x? :string){
//   if(x){
//     console.log('안녕하세요' + x)
//   } elso {
//     console.log('이름이 없습니다.')
//   }
// }

// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 

function 자릿수세기(x: number | string) : number{
  return x.toString().length
}

// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

function 결혼가능(money :number, house:boolean, charm:string) : string|void{
  let score :number = 0;
  score += money;
  if(house === true){
    score += 500
  }
  if(charm === '상'){
    score+= 100
  } else if(charm === '중'){
    score+= 50
  } else if(charm === '하'){
    score+= 10
  } if (score >= 600){
    return '결혼가능'
  }
}
console.log(결혼가능(100,true,'상'));