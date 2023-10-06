import { useState } from "react";
import { CounterContext } from "./context/CounterContext";
import { Counter } from "./components/Counter";

export function App() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <CounterContext.Provider value={[total, setTotal]}>
        <p>App.tsx {total}</p>
        <p>Context API</p>
        <Counter />
      </CounterContext.Provider>
    </>
  );
}