// protected, static

// 잠시 문법 체크
// class 복사하고 싶네
// class User {
// x = 10;
// }
// // extends 붙이면 된다
// class NewUser extends User {

// }

// let 사람 = NewUser();
// console.log(사람) // x:10

// 키워드 하나 배워보기
// protected
// private, protected 붙이면 class{}안에서만 사용가능
class User {
  protected x = 10;
}
// NewUser에서는 private 일때 User 사용할 수 없다.
// protected를 사용하면 User에서도 사용가능하다.
// 현재 class{}안에서 + extends 된 class{}안에서 사용가능
class NewUser extends User {
  doThis() {
    this.x = 20;
  }
}
//protected : extends된 class는 사용가능, 자식들 사용불가능
//private : extends된 class는 사용불가능, 자식들 사용불가능

// static
// static 키워드 붙이면 부모 class에 직접 부여됨 ( + 자식에게 안물려줌, extends하면 잘 따라옴 )
class User1 {
  static x = 10;
  y = 25;
}

let 자식 = new User1();
console.log(자식); // {x:10, y:25} => static 부여하면 x는 사라짐.(자식들이 물려받지 못함)
console.log(자식.x); // 없음
console.log(User1.x); // 됨 부모만 가져다가 쓸수 있음.

// 어디다가 활용할까?
class User2 {
  static skill = "js";
  intro = User2.skill + "전문가입니다.";
}

let 철수 = new User2();

User.skill = "ts";

let 철수2 = new User2();
