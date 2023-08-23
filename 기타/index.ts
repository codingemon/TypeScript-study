// JS문법시간 class 키워드 알아보기

// {object} 자료형으로 LOL캐릭터들의 정보를 정리
var nunu = {
  q: "consume",
  w: "snowball",
};

var garen = {
  q: "strike",
  w: "courage",
};

// 비슷한 object 많이 만들일 있으먼 class 만들어쓰자
// class는 object 뽑는 기계
// this 기계로부터 생성되는 objec (instance)
function 기계(구멍) {
  this.q = 구멍;
  this.w = "snowball";
}
var nene = new 기계("consume");
var garen = new 기계("strike");

//ES6 class문법
class hero {
  constructor(구멍) {
    this.q = 구멍;
    this.w = "snowball";
  }
}
