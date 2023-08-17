import { useEffect, useState } from "react";
import { api } from "../../services/api"
import { ContainerTrasactionsTable } from "./styles";

interface Transaction {
  type: string;
  id: number;
  title: string;
  amount: number;
  category: string; 
  createdAt: string;
}

export function TrasactionsTable(){
  //O meu estado armazena um Array de transaction
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions")
    .then(response => setTransactions(response.data.transactions)) //salvo os dados no estado!
  }, [])

  return (
    <ContainerTrasactionsTable>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ContainerTrasactionsTable>
  );
} 