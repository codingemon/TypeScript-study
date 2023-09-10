// type mapping
// 타입을 한꺼번에 바꿔치기도 가능

// keyof
// let obj = {name : 'kim', age:20}
// Object.keys(obj)

// key값을 전부 가져오는 keyof
// interface Person {
//   age: number,
//   name: string
// }
// 'age' | 'name' 유니온타입으로 만들어짐
// type PersonKeys = keyof Person
// let a :PersonKeys = 'name'

// index signature에다가 keyof 쓰면
// interface Person {
//   [key:string] : number
// }

// type PersonKeys = keyof Person   // string | number
// let a :PersonKeys = 'name'

// 타입을 만들었는데..
type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};
// 전부 string으로 바꾸려면
// 타입 변환기 만들기
type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};
type 새로운타입 = TypeChanger<Car>;

// Q.prince 속성은 string | number 이렇게 되게?

// (숙제1) 다음 타입을 변환기 돌려보십시오.
type Bus = {
  color: string;
  model: boolean;
  price: number;
};
// 동료가 잘못 만든 타입입니다.
// color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
// 1. 변환기 하나 만드시고
// 2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.

// (숙제2) 이런 변환기는 어떻게 만들어야할까요?
// object안에 들어있는 모든 속성을
// string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
type TypeChangerTest1<MyType1> = {
  [key in keyof MyType1]: string | number;
};
type 테스트1 = TypeChangerTest1<Bus>;

type TypeChangerTest2<MyType2, T> = {
  [key in keyof MyType2]: T;
};
type test1 = TypeChangerTest2<Bus, string[]>;
type test2 = TypeChangerTest2<Bus, boolean>;
