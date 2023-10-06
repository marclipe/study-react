//1. Create a Context Object
import { Dispatch, SetStateAction, createContext } from "react";

export interface MyContextType {
  text: string; 
  setText: Dispatch<SetStateAction<string>>
}

export const MyContext = createContext<MyContextType | string>("");