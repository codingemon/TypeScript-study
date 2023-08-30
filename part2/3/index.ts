//function return 값에 붙일 수 있는 never type
// 조건 1. return 값이 없어야한다.
//     2. endpoint가 없어야한다.
// function 함수() : never{
// 1. what is 끝나지 않는 함수
// (endpoint가 없는 함수)
// throw new Error() // 강제로 에러를 내주세요.
// }

// 2.
// 실제 코딩생활에서의 never 타입쓰는법
// 대부분 쓸데가 없다. :void 쓰면 된다
function 함수(): never {
  while (true) {}
}

// ex
// 1. never 타입등장하는 경우1 뭔가 이상한 narrowing
function 함수1(parametor: string) {
  if (typeof parametor == "string") {
    console.log(parametor);
  } else {
    // 이런 경우는 never임 (parametor)
    console.log(parametor); // never type
  }
}

// 2. 어떤 함수표현식은 return 타입이 자동으로 never
// 함수 표현식
let 함수3 = function () {
  throw new Error();
};

// 내가 쓴게 never 타입이구나 하고 이해하고 넘어가면 되는 정도로만 알자.
