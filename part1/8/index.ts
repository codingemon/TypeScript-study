// type alias에 함수 type 저장해서 쓰는법
// 1. 함수타입은 () => {}모양으로
type 함수타입 = (a: string) => number;
// 함수표현식 써여한다
// 2.함수표현식에만 type alias 사용가능
let 함수: 함수타입 = function (a) {
  return 10;
};

// object 안에 함수만들 수 있다
// let 회원정보 = {
//   name: 'kim',
//   plusOne(){
//   }
// }

// 회원정보.plusOne()
// Q.object안의 함수 타입지정은 어떻게?

// 파라미터 하나는 number
// return 값은 number
// let 회원정보 = {
//   name: 'kim',
//   plusOne(a){
//     return a + 1
//   }
//   changeName : () => {}
// }
// 회원정보.plusOne()

//숙제를 위한 잠깐 콜백함수 개념설명
function 함수1(a) {
  a();
}
function 함수2() {}
함수1(함수2);
// 콜백함수
// 1. 그럼함수1 내부 코드 a()실행됨
// 2. 근데 파라미터를 a자리에 집어넣어서 함수2() 실행됨

// (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.
// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.
// - type 키워드를 쓰든 말든 알아서 합시다.

type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();

// (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};

function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}
