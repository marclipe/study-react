import { Summary } from "../Summary";
import { TrasactionsTable } from "../TransactionsTable";
import { ContainerDashboard } from "./styles";

export function Dashboard() {
  return (
    <ContainerDashboard>
      <Summary/>
      <TrasactionsTable/>
    </ContainerDashboard>
  )
}