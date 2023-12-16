// Literal Types로 만드는 const 변수 유사품

// 더 엄격한 타입지정 가능 "이런 문자만 들어올 수 있습니다~"
// Literal types
let 이름: "kim"; // kim이라는 문자만 들어올 수 있음
이름 = "종밥이"; // error
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 자동완성도 가능
let 나예요: "choi" | "커플";
나예요 = "choi";
// 함수도 되나 테스트 => 잘된다
function 함수(a: "Hello") {}
함수("Hello");
function 함수1(a: "Hello"): 1 | 0 {
  return 1;
}
함수("Hello");

// 이런 함수 어떻게 만들죠?
// 1. 가위 or 바위 or 보 중 1개 입력가능
// 2. 가위 or 바위 or 보 만 들어올 수 있는 array를 return 해야함
// 내 코드
function Game(x: "가위" | "바위" | "보"): "가위"[] | "바위"[] | "보"[] {
  return ["가위"];
}
// 코딩애플 코드
function 함수2(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

//const 변수의 한계
// const 변수와 유사하게 사용가능
let 나는요: "대머리" | "솔로";
const 변수 = "kim";

// Liuteral type의 문제점
var 자료 = {
  name: "kim",
} as const;
// as const - 이 object는 literal type 지정 알아서 해주세요
// 1. object value 값을 그대로 타입으로 지정해줌
// 2. object 속성들에 모두 readonly 붙여줌 => object속성을 맘대로 바꿀 수 없다
// object 자료를 완전히 잠가놓고 싶으면 as const 사용
function 내함수(a: "kim") {}
// 내함수(자료.name) // kim:string  error
