"use strict";
// .js에 있는 변수를 .ts에서 이용하고 싶다
Object.defineProperty(exports, "__esModule", { value: true });
// -import 해온 것도 아니라 일단 에러가 반겨줌
console.log(a + 1);
// 재정의해야지 에러 안남
$().append();
// 로컬변수에서 글로벌 만들고 싶을때
var b = "kim";
