// .js에 있는 변수를 .ts에서 이용하고 싶다

//변수 재정의가 가능한 declare 문법
// 어딘가에 분명 변수 a 있음
// 에러내지 말아주세요 라는 뜻
// 일반 Js파일 등에 있던 변수 쓸 때 에러나지 않도록 재정의 할 떄 씁니다.
declare let a;
// js로 변환되지 않음
declare let $: number;

// -import 해온 것도 아니라 일단 에러가 반겨줌
console.log(a + 1);

// 재정의해야지 에러 안남
$().append();

// ts파일 --> ts파일로 변수를 가져다 쓰고 싶으면 import export
import { a } from "./data";

// 로컬변수에서 글로벌 만들고 싶을때
let b: Dog = "kim";
