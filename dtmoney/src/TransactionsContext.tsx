import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  type: string;
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode
}

//No createContext a gente passa o valor default
export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  //Passo uma lista de transactions para ele, assim como no estado
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions)); //salvo os dados no estado!
  }, []);

  return (
    //Estava utilizando no meu App
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}