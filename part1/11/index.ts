// object 키워드의 겨우
// type, interface 키워드 타입변수 생성가능.

// type 키워드
// type Square = {
//   color: string,
//   width: number
// }
// let 네모  = { color:'red', width:100}

// object 타입지정시 interface 사용가능
// class 만드는법이랑 유사
interface Square {
  color: string;
  width: number;
}
let 네모 = { color: "red", width: 100 };

// 퀴즈
// interface Student {
//   name: string
// }
// interface Teacher{
//   name: string,
//   age: number
// }
// let 학생:Student = {name : 'kim'}
// let 선생:Teacher = {name : 'lee', age:31}

// interface 장점: extends로 복사 가능
// interface Student {
//   name: string
// }
// interface Teacher extends Student {
//   age: number
// }
// let 학생:Student = {name : 'kim'}
// let 선생:Teacher = {name : 'lee', age:31}

// type도 & 기호(intersection type)으로 가능
// 두타입을 전부 만족하는 타입이라는 뜻
// type Animal = {name :string }
// type Cat = {age : number } & Animal

// type vs interface
// interface는 중복선언가능(유연)
// type은 중복선언 불가능(엄격)

// 외부라이브러리같은 경우 interface 많이 사용
// 그럼 추후에 타입에 뭐 더하는거 쉬움
// 다른 사람이 이용많이할 것 같으면 object타입정할 때 interface쓰자

// extends 쓸 때 중복속성 발생하면?
// 에러로 잡아줌
// interface가 조금 더 안전하다.
interface Student {
  name: string;
}
interface Teacher extends Student {
  name: number;
}
let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "lee", age: 31 };

// & 쓸때 중복속성 발생하면?
// 미리 에러안나서 주의
// & 는 합치는게 아니라 왼쪽 오른쪽 둘 다 만족하는 타입임
type Animal = { name: string };
type Cat = { name: number } & Animal;
let 야옹이: Cat = { name: "kim" };

// (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
interface Samsung {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Samsung = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["Tv", "phone"],
};

// 숙제2) array 안에 object 여러개가 필요합니다.
interface Cart {
  product: string;
  price: number;
}
interface NewCart extends Cart {
  card: boolean;
}
// Cart를 []로 해주면 적용 끝
let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// (숙제3) 위에서 만든 타입을 extends 해봅시다.
// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.

interface Cart {
  product: string;
  price: number;
}
interface NewCart extends Cart {
  card: boolean;
}
