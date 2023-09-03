// import export

// import export 설명시간
import { 이름, 나이, Name } from "./a";
console.log(이름);

// 타입도 import export 가능
let 변수: Name = "park";

// 옛날에는 import export 문법이 없어서..
// 문제점 : 변수명 맨날 겹침(그래서 변수를 함수에 싸매고 그랬음)
// 지금은 다른 파일에서 쓸 변수를 export import로 선택가능

//예전에 사용
///<reference path="./a.ts"/>
// => import export를 쓰자 지금은
