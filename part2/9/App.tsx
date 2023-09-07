import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate, 증가 } from "./index";
import { Dispatch } from "redux";

// 컴포넌트에서 redux에서 만든 state 쓸때
function App() {
  const 꺼내온거 = useSelector((state: Rootstate) => state); // store 변수의 타입을 똑같이
  const dispatch: Dispatch = useDispatch();
  return (
    <div className="App">
      {꺼내온거.counter1.count}
      <button
        onClick={() => {
          dispatch(증가());
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
