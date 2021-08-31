import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeValueAction } from "./counterSlice";
// import styles from './Counter.module.css'
import store from "../../app/store";

export function Counter() {
  const count = useSelector((state) => state.test.value);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  console.log(title);
  console.log(count);
  const state = store.getState();
  console.log("state", state);

  return (
    <div>
      <div>
        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button> */}

        <input type="text" onChange={(event) => setTitle(event.target.value)} />
        <button onClick={() => dispatch(changeValueAction("anh"))}>
          change
        </button>
        <p>{count}</p>
      </div>
    </div>
  );
}
