// type alias 만드는 법
// let 동물 :string | number | undefined ;
type Animal = string | number | undefined;
let 동물: Animal = 123;

// let 동물1 : {name : string, age: number} = {name : 'kim', age:20}
type Animal1 = { name: string; age: number };
let 동물1: Animal1 = { name: "kim", age: 20 };

// const 변수 잠깐 설명시간
// const 출생지역 = 'seoul';
// 출생지역 = 'busan' // 바꿀수 없음
// 오브젝트 수정을 막지는 않음
const 출생지역 = { region: "seoul" };
// const변수는 등호로 재할당만 막는 역할임
// const로 담은 object 수정은 자유롭게 가능
출생지역.region = "busan";

// typescript쓰면 object 자료 수정도 막을 수 있음
// type Girlfriend = {
//     name:string
// }
type Girlfriend = {
  // readonly쓰면 object자료 수정도 막을 수 있음
  readonly name: string;
};
const 여친: Girlfriend = {
  name: "엠버",
};
여친.name = "쭈압"; //error (readonly 덕분)
// object속성 안에도 ? 사용가능
type Girlfriend = {
  // name 속성은 선택사항 string | undefined
  name?: string;
};

// type변수 union type으로 합치기 가능
// 합치는 방법 1.
type Name = string;
type Age = number;
type Person = Name | Age; // string or number가 들어와짐

// 2. &연산자로 object타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };
// object타입 extend하기
type NewType = PositionX & PositionY; // {x:nubmer, y:number}
let position: NewType = { x: 10, y: 20 };

// (참고) 같은 이름의 type 변수 재정의 불가능하다
type PositionX = number;

// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 그건 여러분들이 한번 테스트해보길 바랍니다.

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
// type alias로 만들어보셈

type Test2 = {
  color?: string;
  size: number;
  readonly position: number[];
};

let 테스트해보자: Test2 = {
  color: "노랑",
  size: 2,
  position: [2, 3],
};

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type User = {
  readonly name: string;
  readonly phone: number;
  email?: string;
};

let 유저정보: User = {
  name: "홍길도",
  phone: 111111100,
  email: "sdfkjsd120391203@gdfjkgnsdjkgn",
};

// (숙제4) 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.

type Test4 = {
  name: string;
  phone: number;
  email?: string;
  young: boolean;
};

let 유저정보4: Test4 = {
  name: "kim",
  phone: 2222,
  email: "sksk2@dfgkdfmg.dfkgm",
  young: true,
};

// extend 해보기
type ExtendTest = {
  name: string;
  phone: number;
  email?: string;
};

type ExtendTest2 = { adult: boolean };

type NewType2 = ExtendTest & ExtendTest2;

let 가입정보: NewType2 = {
  name: "string",
  adult: false,
  phone: 123,
};
