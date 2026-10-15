import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const handelInc = () => {
    setCount((prev) => prev + 1);
  };
  const handelDec = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    count > 0 && setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handelInc}>Increment</button>
      <button onClick={handelDec}>Decrement</button>
      
    </div>
  );
}

export default Counter;
