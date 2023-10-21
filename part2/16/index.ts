// if else in types

// 삼한연산자 개념정리
3 > 1 ? console.log("맞음") : console.log("아님");
// 조건식      참일 때 실행할 코드     거짓일 때 실행할 코드

// <>이건 일반 타입변수에도 사용가능
// type Age<T> = T;
// let a = Age<string>
// 파라미터로 string을 집어넣으면 string 남겨주시고 그게 아니면 unknown 남겨주세요
// 1. type if문은 삼항연산자로
// 2. 조건식은 extends 써야함
type Age<T> = T extends string ? string : unknown;
let a: Age<string>; // string
let a2: Age<number>; // unknown

// Q.조건문으로 이런 타입 만들어보자
// 파라미터로 array 타입을 입력하면 array 첫 자료의 타입을 남김
// array타입말고 다른거 입력하면 any 남김
type FirstItem<T> = T extends any[] ? T[0] : any;
let b: FirstItem<string[]>;
let b1: FirstItem<number>;

// infer 키워드
// 자주 쓰지는 않지만 배우면 좋음
// 조건문에서 쓸 수 있는 Infer키워드

// 타입을 왼쪽에서 추출해준다. T에서 타입 뽑아주세요 R변수에 담아주세요
type Person<T> = T extends infer R ? R : unknown;
type c = Person<string>;

// infer키워드 예시2
// array 내부의 타입만 뽑고 싶다.
// type 타입추출<T> = T extends (infer R)[] ? R : unknown;
// type d = 타입추출<string[]>

// infer키워드 예시3
// 함수를 넣으면 함수의 return 타입만 뽑고싶다.
type 타입추출<T> = T extends () => infer R ? R : unknown;
type d = 타입추출<() => void>;

// => ReturnType 이라는 기본 함수 쓰면 알아서 해줌.
type f = ReturnType<() => void>;
