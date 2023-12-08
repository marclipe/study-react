import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api"
import { ContainerTrasactionsTable } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

export function TrasactionsTable(){
  const transactions = useContext(TransactionsContext);

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