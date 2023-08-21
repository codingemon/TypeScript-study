// 타입스크립트로 HTML 변경과 조작할 때 주의점

// 기본 자스
// document.getElementById()

// 1. narrowing
// let 제목 = document.querySelector("#title");
// if (제목 != null) {
//   제목.innerHTML = "반가워요";
// }

// 2. instanceof 연산잔
// 가장 많이 사용할것
// let 제목 = document.querySelector("#title");
// if (제목 instanceof Element) {
//   제목.innerHTML = "반가워요";
// }

// 3. as로 사기치기
// 자주 쓰는거 아님
// let 제목 = document.querySelector("#title") as Element;
//   제목.innerHTML = "반가워요";

// 4. 오브젝트에 붙이는 ?.
// 1) 제목에 innerHTML이 있으면 출력해주고
// 2) 없으면 undefined 뱉어주세요
// optional chaining 문법
// let 제목 = document.querySelector("#title");
// if (제목?.innerHTML != undefined) {
//   제목.innerHTML = "반가워요";}

// 5.strict모드 끄기
// 태그마다 정해져있음
// HTMLHeadElement
// HTMLButtonElement
// HTMLAnchorElement
// let 링크 = document.querySelector('.link')
// if(링크 instanceof HTMLAnchorElement){
//   링크.href = 'http://kakao.com'
// }

// 타입스크립트에서 addEventListener 부착하는법
let 버튼 = document.querySelector("#button");
// 버튼에 addEventListener 가능하면해주시고 아니면 undefined 뱉으세요
버튼?.addEventListener("click", function () {});

// (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "change.jpg";
}

// 숙제 2
// 에러남
// let pageChange = document.querySelector(".naver");
// if (pageChange instanceof HTMLAnchorElement) {
//   pageChange.href = "https://kakao.com";
// }

let 링크 = document.querySelector(".naver");
for (let i = 0; i < 3; i++) {
  let a = 링크[i];
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
}
