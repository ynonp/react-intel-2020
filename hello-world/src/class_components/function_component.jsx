import React, { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(c => c + 1);
  }

  return [count, inc];
}

function CounterB() {
  const [count, inc] = useCounter();

  return (
    <div>
      <button onClick={inc}>{count}</button>
    </div>
  )
}

function CounterA() {
  const [count, inc] = useCounter();

  return (
    <div>
      Count: {count}
      <button onClick={inc}>{count}</button>
    </div>
  )
}

export default function Demo() {
  return (
    <div>
      <CounterA/>
      <CounterB/>
      <CounterB/>
      <CounterB/>
    </div>
  )
}