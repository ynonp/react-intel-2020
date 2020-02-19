import React  from "react";
import ReactDOM from "react-dom";
import { useState, useMemo, useCallback } from "react";

const Header = React.memo(function Header(props) {
  console.log("Header.render");

  return <h1>My Counter Demo</h1>;
});

const DisplayValue = React.memo(function DisplayValue(props) {
  console.log("DisplayValue.render");
  const { val } = props;
  return <p>Value: {val}</p>;
});



const DisplayMod5 = React.memo(function DisplayMod5(props) {
  console.log("DisplayMod5.render");

  const { val } = props;
  const text =
    val % 5 === 0 ? "Value is divisible by 5" : "Value does not divide by 5";

  return <p>{text}</p>;
}, function propsAreEqual(prevProps, nextProps) {
  const prevMod5 = prevProps.val % 5 === 0;
  const nextMod5 = nextProps.val % 5 === 0;
  return prevMod5 === nextMod5;
});



const MyButton = React.memo(function MyButton(props) {
  console.log("MyButton.render");
  return <button onClick={props.onClick}>Click Me</button>;
});





export default function Counter() {
  console.log("Counter.render");

  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);

  const inc = useCallback(function inc() {
    setCount(val => val + delta);
  }, [delta, setCount]);

  return (
    <>
      <Header />
      <label>
        Increase by:
        <input
          type="number"
          value={delta}
          onChange={e => setDelta(Number(e.target.value))}
        />
      </label>
      <DisplayValue val={count} />
      <DisplayMod5 val={count} />
      <MyButton onClick={inc} />
    </>
  );
}

