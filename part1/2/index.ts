// // 변수에 타입지정가능
// // 변수명: 타입명
// // 장점) 타입이 실수로 변경될 때 에러내줌
// // 변수에 타입지정 = 변수에 실드씌우는 것이다.
// let 이름: string = "kim";
// let 나이: number = 50;
// let 결혼했니: boolean = true;
// let 텅비었어: null = null;
// let 정리안됏엉: undefined = undefined;

// 변수 하나에 여러자료 집어넣고 싶으면 array 자료형 쓰면 된다.
let 회원들: string[] = ["kim", "park"];
let 회원수: number[] = [23, 22];

// object 자료형 써도 가능하다
let 회원들은: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// 타입지정 원래 자동으로 된다. 타입지정 문법 생략가능하다.
let 회원들1 = "우엉";

// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다
let 이름: string = "최성형";
let 나이: number = 31;
let 출생지역: string = "서울";

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let 내가좋아하는가수: { name: string; song: string } = {
  name: "유재하",
  song: "별헤는 밤",
};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
