import { ReactNode, useContext } from "react";
import { CounterContext } from "../context/CounterContext";

interface CounterProps {
  children?: ReactNode;
}

export function Counter({children}: CounterProps) {
  // 3- useContext
  const [ total, setTotal ] = useContext(CounterContext);

  return (
    //2- Create Provider 
    <CounterContext.Provider value={[ total, setTotal ]}>
      <h3>{total}</h3>
      <button type="button" onClick={() => setTotal(total + 1)}>
        Count
      </button>
      {children}
    </CounterContext.Provider>
  )
}