import { Dispatch, SetStateAction, createContext } from "react";

type CounterContextType = [number, Dispatch<SetStateAction<number>>]

//1 - Create Context
export const CounterContext = createContext<CounterContextType>([0, () => {}]);