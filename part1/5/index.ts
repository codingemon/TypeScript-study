// Type이 아직 하나로 확정되지 않았을 경우
// Type Narrowing을 써줘야한다.
// function 함수(x :number|string){
//   if(x의 타입이 string){
//   return x + 1
//   } else {

//   }
// }
// 내함수(123)

// typeof 연산자
// (union type 등 때문에) 어떤변수가 타입이 아직 불확실하면
// if문 등으로 Narrowing 해줘야 조작가능
function 함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

// (주의) if문 썼으면 끝까지 써야 안전 else, else if안쓰면 에러 잡아 줄수도
function 내함수(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
}

내함수(123);

// Narrowing으로 판정해주는 문법들
// 1. typeof 변수 2. 속성명 in오트젝트자료 3. 인스턴스 instanceof 부모
// 현재 변수의 타입이 뭔지 특정지을 수 있기만하면 다 인정해준다.

// 아니면 assertion 문법(타입 덮어쓰기)
// function 내함수1(x: number | string) {
//   let array: number[] = [];
//   array[0] = x as number;
// }
// 내함수1(123);

// 빠따 안맞기 위한 assertion 문법의 용도
// 1. Narrowing 할때 쓴다.
// function 내함수1(x: number | string) {
//   let array: number[] = [];
//   array[0] = x as number;
// }
// let 이름 : string = 'kim'
// 이름 as number // 에러 , 타입을 a에서 b로 변경 X

// 내함수1(123);

// 2. 무슨 타입이 들어올지 100% 확실할 때 쓰자 (그래서 굳이 쓸 이유가 없음)
// 남이 짠 코드 수정할 때, 왜 타입에러가 나는지 모르겠을때
