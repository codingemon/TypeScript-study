// typeof 연산자로는 부족하다
// null & undefined 타입체크하는 경우 매우 잦음
// 익슉하지 않다면 if/esle 쓰는게 명확하고 좋음
// function 함수(a:string | undefined){
//   // 1. && 연산자로 null & undefined 타입체크하기
//   // a가 undefined면 if문 실행 x
//   // a가 string이면 if문 실행 o
//   if(a && typeof a === 'string'){

//   }
// }

// 서로 가진 속성명이 다름
// 서로 가진 속성명이 다르면 in 사용해보자
type Fish = { swim: string };
type Bird = { fly: string };

function 함수(animal: Fish | Bird) {
  // typeof연산자는 number string boolean object 이런식으로만 판정가능
  // 2. in 키워드로 object narrowing 가능
  // 속성명 in 오브젝트자료
  // Fish 타입인지 검사가능 , 유사하게 fly속성으로도 Bird타입인지 검사가능
  if ("swim" in animal) {
    animal.swim;
  }
}

// 3. instanceof 연산자로 Object narrowing 가능
// object 두개가 비슷하면 부모class가 누군지 물어봐서 narrowing 가능
// 오브젝트 instanceof 부모class
// let 날짜 = new Date()
// if(날짜 instanceof Date){

// }

// object 타입이 둘다 비슷하게 생겼는데 narrowing 어떻게 할까?
// 속성명 in 오브젝트자료(불가능)
// 오브젝트 instanceof 부모class(불가능)
// (애초에 타입을 두개로 나주지말고 하나로 만즐자)
// literal type 강제로 만들어두면 나중에 도움됨 = wheel
// 4. object 타입마다 literal type 만들어두면 narrowing 편리해진다.
type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};
// x가 car 타입인지 아닌지
function 함수1(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 Car타입이에요");
  }
}

// (요약) 논리적으로 이 타입인지 특정지을 수 있으면 narrowing으로 인정해준다
