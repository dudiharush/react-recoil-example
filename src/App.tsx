import * as React from "react";
import "./styles.css";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";

const counterState = atom({
  key: "counterState",
  default: 0
});

const x2selector = selector({
  key: "x2selector",
  get: ({ get }: any) => {
    const count = get(counterState);
    return count * 2;
  }
});

export default function App() {
  const [count, setCount] = useRecoilState(counterState);
  const x2value = useRecoilValue(x2selector);
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <span>{count}</span>
      <span>double: {x2value}</span>
    </div>
  );
}
