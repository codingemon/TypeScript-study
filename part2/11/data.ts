// ts 이상한 특징: 모든 ts파일은 ambient module(글로벌 모듈)

let a = 10;

// ts 파일을 ambient 모듈이 아니라 로컬 모듈로 만드는법
// -import export 있으면 자동으로 로컬 모듈임
export {};

//(햔재 로컬 모듈임)
// 근데 갑자기 글로벌 변수 만들고 싶어짐
// 그럼 declare global{}안에 적으면 됩니다.
declare global {
  type Dog = string;
}
