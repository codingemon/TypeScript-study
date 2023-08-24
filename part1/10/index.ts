// // class 만들기
// class Person {
//   //class 필드값 (constructor와 똑같은 역할)
//   data = 0; // type 지정은 자동 할당
// }

// let 사람1 = new Person();
// let 사람2 = new Person();

// console.log(사람1.data); //0

// TS constructor()
// class Person {
//   // JS & TS 다른점 존재
//   // 필드값에 어쩌구가 미리 있어야지 this.어쩌구 가능하다.
//   name :string // 미리 필등값을 지정해야지 밑에서 this 사용
//   constructor(){
//     this.name = 'kim'
//   }
// }

// let 사람1 = new Person();
// let 사람2 = new Person();

// // coustructor 파라미터 타입지정 가능
// class Person {
//   name :string
//   // 복제되는게 항상 object인데 return 타입지정할 이유는 없다.
//   // 당연히 rest parameter, default parameter 등 가능
//   constructor(a : string){
//     this.name = a;
//   }
// }

// let 사람1 = new Person('kim');
// let 사람2 = new Person('park');

// console.log(사람1)// kim
// console.log(사람2)// park

// prototype 함수는 여기에 만듭니다.
// class Person {
//   name :string
//   constructor(a : string){
//     this.name = a;
//   }
//   //return 타입 지정해도 좋음
//   함수(a: string){
//     console.log('안녕' + a)
//   }
// }

// let 사람1 = new Person('kim');
// let 사람2 = new Person('park');
// 사람1.함수('안녕')

// (숙제1) Car 클래스를 만들고 싶습니다.
// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.

class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 300);
console.log(car1);
console.log(car1.tax());

// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈

class Word {
  num;
  str;

  constructor(...param: (number | string)[]) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        문자들.push(i);
      } else {
        숫자들.push(i);
      }
    });
    this.num = 숫자들;
    this.str = 문자들;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);
