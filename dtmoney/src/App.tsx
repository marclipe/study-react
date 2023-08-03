import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Dashboard/>
      <GlobalStyle />
    </ThemeProvider>
  );
}
