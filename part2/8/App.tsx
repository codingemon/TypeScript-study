import React from "react";
import "./App.css";

// 1. 일반변수, 함수만들 때 타입지정 잘 하자.

// 2. JSX 표현하는 타입 있음
// let 박스 :JSX.Element = <div></div>;

function App() {
  // 5. useState 타입지정
  let [user, setUser] = useState(["kim"]);

  return (
    <div>
      <h4>안녕하세요</h4>
      <Profile name="철수" age="20"></Profile>
    </div>
  );
}

// 3.componet 만들 때 타입지정.
// 함수 타입지정은 파라미터 & return 값
// 4. component props 타입지정
// props 잘못 전달해서 에러가 잦음
function Profile(props: { name: string; age: number }): JSX.Element {
  return <div>{props.name}입니다.</div>;
}

export default App;
