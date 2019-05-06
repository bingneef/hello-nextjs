import { createEvent, createStore } from "effector";

export const increment = createEvent("increment");
export const decrement = createEvent("decrement");
export const resetCounter = createEvent("reset counter");

const store = createStore(0)
  .on(increment, state => state + 1)
  .on(decrement, state => state - 1)
  .reset(resetCounter);

export default store;
