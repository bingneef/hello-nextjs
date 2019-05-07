import { createComponent } from "effector-react";

import store, { decrement, increment, resetCounter } from "./store";

const Counter = createComponent(store, (props, counter) => {
  function _increment() {
    increment();
  }

  function _decrement() {
    decrement();
  }

  function _resetCounter() {
    resetCounter();
  }

  return (
    <>
      <div>{counter}</div>
      <button onClick={_increment}>+</button>
      <button onClick={_decrement}>-</button>
      <button onClick={_resetCounter}>reset</button>
    </>
  );
});

export default Counter;
