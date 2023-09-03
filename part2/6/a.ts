export var 이름 = "lee";
export var 나이 = "31";
// 타입도 import export 가능
export type Name = string;

// TypeScript 타입변수 숨기기 문법
// namespace
//숨기고 싶은 타입변수를 object 자료안에 숨겼다.
namespace 네임스페이스 {
  export type Name1 = string | number;
}

let 변수 = (네임스페이스.Name1 = "kim");

// interface 이런 것들도 export 가능
export interface 인터페이스 {}

// 더 옛날에는 네임스페이스를 모듈로 사용
module 네임스페이스1 {}
