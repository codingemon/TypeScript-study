// d.ts file
// (참고) import/export 할게 많으면 namespace 쓰던지 import *as 어쩌구 쓰던지

// import { Age } from "./types/common/test";

// let age: Age;

// ts파일에 타입정의가 너무 길면 d.ts파일 만들기도 함
// 모든 타입을 정리해놓은 레퍼런스용으로 d.ts파일 쓰기

let 이름: string = "kim";
type Age = number;

// d.ts파일 용도
// 1.타입정의 따로 보관할 파일이 필요하면
// 2. 타입 레퍼런스 생성하고 싶으면

// "typeRoots":["./types"] 덕분임
// 귀찮을때 빼곤 쓰지말자 위험할 수 있다.
let 나이: Age = 30;

// 외부라이브러리 쓸 때 타입정의 안되어있다면
$().append();
