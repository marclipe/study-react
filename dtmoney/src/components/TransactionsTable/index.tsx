import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api"
import { ContainerTrasactionsTable } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

interface Transaction {
  type: string;
  id: number;
  title: string;
  amount: number;
  category: string; 
  createdAt: string;
}

export function TrasactionsTable(){
  const data = useContext(TransactionsContext);

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
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                   new Date(transaction.createdAt) //Converto pois vem como uma string da API
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ContainerTrasactionsTable>
  );
} 