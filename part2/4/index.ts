// public, private
// 객체지향언어같은 문법도 제공함
// class 많이 만들어서 개발하려면
// public private protected static 키워드 유용

class User {
  // class에서 쓰는 public 키워드
  // -public 붙으면 모든 자식들이 이용가능
  public name;
  constructor(a) {
    this.name = a;
  }
}
let 유저1 = new User("park");
유저1.name = "안뇽";
// Q.public 안붙여도 원래 그렇지않나?
// A.맞다 생략해도 부여되어있다.

// class에서 쓰는 private 키워드
// private 키워드 사용예시
class User1 {
  name: string;
  // 패밀리네임 속성을 변경하면안된다 그러므로 private
  private familyName: string = "kim"; // private은 수정불가가 아님, class{}안에서만 수정,사용가능
  constructor(a) {
    this.name = this.familyName + a;
  }
//자식들이 패밀리네임을 바꾸고 싶으면 ?
// 1. class 안에 familyName 변경함수제작
이름변경함수(){
  this.familyName = 'park';

}

let 유저2 = new User1("lee");
// 유저2.name // 수정할 권한이 없다. private 붙으면 class안에서만 수정, 이용가능
// console.log(유저2); // {name:'lee'}
// console.log(유저2); // kim lee
// Q.class 밖에서 수정가능하게 하려면?
// 2. 자식들이 사용
유저2.이름변경함수()
console.log(유저2)
// 데이터를 외부로부터 보호하고싶을 때 자주 사용하는 패턴임

// public 키워드 쓰면 this.어쩌구 생략가능
class Person{
  // 이 자리에 들어온 파라미터는 자식의 name 속성에 기입해주세요
  constructor(public name : string ){}  
}

let 자식 = new Person('kim');
console.log(자식) // {name: 'kim'}
