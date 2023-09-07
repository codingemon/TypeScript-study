//array에 타입넣는 법
let 멍멈: (string | boolean)[] = ["dog", true];

// 첫자료는 무조건 string, 둘째 자료는 무조건 boolean 넣어라
// 위치까지 고려한 타입지정 가능 [tuple type]
// 다른 모든 타입넣기 가능
let 왕왕: [string, boolean] = ["dog", true];

// tuple 안에 옵션표시 가능
let 냥냥: [string, boolean?] = ["cat"]; // true가 없어도 통과 시켜줌

let 야옹이: [string, boolean?, number] = ["cat"]; // ?는 항상 뒤옵션에 써줘야한다.

// 응용
// 함수에서 쓰는 tuple
// rest parameter 타입지정?
// rest parameter 타입지정시 tuple 가능
function 함수(...x: [number, string]) {
  console.log(x);
}
// function 함수(a :number, b:string){
//     console.log([a,b])
// }
// 함수(1, 2, 3, 4, 5, 6, 7); 불가능
함수(1, "222");

// array 합칠 때
let arr = [1, 2, 3];
//  spread연산자 씁니다.
// let arr2 = [4,5, ...arr]; // [4,5,1,2,3]
// 이때 타입지정은?
let arr2: [number, number, ...number[]] = [4, 5, ...arr]; // arr가 들어오지만 얼마나 들어올지 몰라요.

// (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
let 마라탕: [string, number, boolean] = ["마라탕존맛", 22000, true];

// (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
let test2: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

// (숙제3) 함수에 타입지정을 해보도록 합시다.
function Test3(...x: [string, boolean, ...(number | string)[]]) {}
Test3("a", true, 6, 3, "1", 4);

// (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
function Test4(...rest: (string | number)[]) {
  // 파라미터 중 문자만 모아서 []에 담아주고, 숫자만 모아서 []에 담아주는 함수
  let result: [string[], number[]] = [[], []];
  rest.forEach((a) => {
    if (typeof a === "string") {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });
  return result;
}

// 1. 함수 만들었습니다. 파라미터는 몇개가 들어올지 몰라서 rest parameter 썼고

// 파라미터 타입은 (string|number)[] 이게 좋겠군요.

// 2. 결과를 저장할 result라는 변수를 만들었습니다. 기본값은 [[], []] 이렇게 만들었고 그거 타입지정은 tuple type을 활용해봤습니다.

// 3. rest 파라미터에 반복문 돌렸습니다. 타입이 string이면 result[0]에 추가해주고 number면 result[1]에 추가해줍니다.

// 4. return 해줌 근데 타입은 알아서 지정 잘 되어있어있군요
