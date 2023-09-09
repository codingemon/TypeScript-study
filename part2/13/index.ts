// implements 키워드

// class Car {
//     model : string;
//     price : number = 1000;
//     constructor(a:string ){
//         this.model = a
//     }
// }
// let 붕붕 = new Car('morning');
// class가 model,price 속성을 가지고 있는지 타입을 확인하고 싶으면 어떻게?
// 그럴경우 inerface + implements 키워드로 확인

interface CarType {
  model: string;
  price: number;
}

// class 이름에 우측에 Implements를 쓰고 interface(CarType) 이름을 쓰면
// 이 class가 이 interface에 있는 속성을 다 들고있냐? 라고 확인이 가능
class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Car("morning");

// implements는 타입지정문법이 아닙니다.
// implements 라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라르 뜻입니다.
interface CarType1 {
  model: string;
  tax: (price: number) => number;
}

class Car1 implements CarType1 {
  model; // any 타입됨
  tax(a) {
    //a 파라미터는 any 타입됨
    return a * 0.1;
  }
}

// 결론은 implements는 class의 타입을 체크하는 용도지 할당하는게 아님을 명심합시다.
