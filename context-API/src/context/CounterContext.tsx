// 1 - create context
import { ReactNode, createContext, useState } from 'react'; 

export const CounterContext = createContext({});

// 2 -  create provider
export function CounterContextProvider({children}: {children: ReactNode}) {
  const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}