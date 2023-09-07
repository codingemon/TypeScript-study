import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

// const 초기값: { count: number } = { count: 0 };

// function reducer(state = 초기값, action: { type: string }) {
//   if (action.type === "증가") {
//     return { ...state, count: state.count + 1 };
//   } else if (action.type === "감소") {
//     return { ...state, count: state.count - 1 };
//   } else {
//     return 초기값;
//   }
// }

//redux toolkit
// 문법의 좋은점
// 1. 함수라 보기좋음
// 2. state 수정시 사본만들 필요 없음
const 초기값: { count: number; user: string } = { count: 0, user: "lee" };
// state + reducer 합친걸 slice라고 부름
const counterSlice = createSlice({
  name: "counter",
  initialState: 초기값,
  reducers: {
    증가(state) {
      state.count += 1;
    },
    감소(state) {
      state.count -= 1;
    },
    // dispatch()할때 number 넣으려고요
    맘대로증가(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

// 만들 슬라이스 등록
let store = configureStore({
  reducer: {
    counter1: counterSlice.reducer,
  },
});

// const store = createStore(reducer);

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type Rootstate = ReturnType<typeof store.getState>;

export let { 증가, 감소, 맘대로증가 } = counterSlice.actions;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
