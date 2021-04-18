import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/style/global';
import dark from './assets/style/themes/dark';
// import light from './assets/style/themes/light';

// import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Header/>
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  );
}

