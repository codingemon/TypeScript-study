// 문자 or 숫자 들어올 수 있는 변수는 어떻게 만들까?
// 유니언 타입(Union Type) 타입2개 이상 합친 새로운 타입만들기
let 회원: number | string = 123;

let 회원들: (number | string)[] = [1, 2, 3];
let 오브젝트: { a: string | number } = { a: "123" };

// any타입
// 모든 자료형 허용해줌 (이럼 타입스크립트 쓰는 의미가 없다)
// 타입실드 해제문법이라고 보면 된다. 일반 JS변수를 만들수 있음
// 그래서 타입관련 버그가 나도 잡아주지 않음
let 이름: any;
이름 = 123;
이름 = [];

// unknown타입, 모든 자료형 허용해줌
// any보다 안전한 이유는
let 이름1: unknown;
이름1 = 123;
이름1 = {};
// 이름1을 막아줌
let 변수1: string = 이름1;

// 타입스크립트의 엄격함에 대해
// 간단한 수학연산도 타입맞아야한다.
// unknown은 number타입이 아님
// (중요)타입 엄격하게 지켜야함
이름1 - 1;

// 타입스크립트는 타입이 엄격한걸 좋아한다
// string 타입 + 1(허용)
// number 타입 + 1(허용)
// string|number 타입 + 1(안돼)
let 나이: string | number;
나이 + 1;
"kim" + 1; // kim 1

let 연세: unknown = 1;
나이 - 1; // 숫자타입이여야 숫자처럼 연산해준다.

// 나중에 Narrowing / Assertion 배워서 엄격하게 코드짜면 된다

// 숙제1) 다음 변수 4개에 타입을 지정해봅시다.
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: [string, undefined | number, boolean] = [user, age, married];

// (숙제2) 학교라는 변수에 타입지정해보십시오.
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
