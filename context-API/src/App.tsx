import { useState } from "react";
import { CounterContext } from "./context/CounterContext";
import { Counter } from "./components/Counter";
import { Hello } from "./components/Hello";
import { MyContext } from "./context/MyContext";

export function App() {
  const [total, setTotal] = useState(0);
  const [text, setText] = useState<string>(""); 

  return (
    <>
      <CounterContext.Provider value={[total, setTotal]}>
        <p>App.tsx {total}</p>
        <p>Context API</p>
        <Counter />
      </CounterContext.Provider>


      <div>
        <MyContext.Provider value={{text, setText}}>
          <Hello/>
        </MyContext.Provider>
      </div>
    </>
  );
}