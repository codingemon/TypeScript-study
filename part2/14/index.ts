// object index signatures

// index signature 쓰면 object 타입지정 한번에 가능

// (반복 귀찮음) . 모든 속성은 string이리거 타입지정도 가능
// interface StringOnly{
//     // name : string,
//     // age : string,
//     // location : string
//     [key : string ] : string  // 모든 문자로 된 속성 . 인덱스 시그니쳐라는 문법
// }

// let user :StringOnly = {
//     name : 'lee',
//     age : 29,
//     location : 'inchen'
// }

// index signature와 중복되는 속성?
// interface StringOnly {
//   // age : number, // 이런건 금지된다
//   // age : number, // 허용
//   // age: '20' // 허용
//   [key: string]: string | number;
// }

// let user: StringOnly = {
//     // 속성이름이 숫자인 경우?
//   0: "lee",
//   1: 29,
//   2: "inchen",
// };
// user[0]

interface StringOnly {
  // 이래도 되긴 합니다.
  [key: string]: string;
}

let user: StringOnly = {
  // 속성이름이 숫자인 경우?
  // 결국은 문자화
  0: "lee",
  1: 29,
  2: "inchen",
};
user[0];

// 이런 object 자료 타입지정은?

// recursive 하게 타입 만드는 법
//   interface MyType {
//         'font-size': {
//             'font-size': {
//                 'font-size': number;
//             };
//         };
//     }
interface MyType {
  "font-size": MyType | number; // {'font-size':MyType}
}

let css: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// (숙제1) 다음 자료의 타입을 지정해보십시오.
interface MyTestType1 {
  [key: string]: string | number;
}

let obj: MyTestType1 = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

// (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오.

interface MyTestObj {
  "font-size": MyTestObj | number;
  [key: string]: number | MyTestObj;
}

let obj1: MyTestObj = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
