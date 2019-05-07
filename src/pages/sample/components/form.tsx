import { createComponent } from "effector-react";

import store, { decrement, increment, resetCounter } from "./store";

const Counter = createComponent(store, (_, counter: number) => {
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
      <div test-id="counter">{counter}</div>
      <button test-id="increment" onClick={_increment}>
        +
      </button>
      <button test-id="decrement" onClick={_decrement}>
        -
      </button>
      <button test-id="reset" onClick={_resetCounter}>
        reset
      </button>
    </>
  );
});

export default Counter;
