import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { createServer } from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1, 
          title: 'Transaction 1',
          amount: 400, 
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        }
      ]
    })
  }
})

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Dashboard/>
      <GlobalStyle />
    </ThemeProvider>
  );
}
