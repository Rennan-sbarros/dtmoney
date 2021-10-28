import { useState } from 'react';
import { usePersistedState } from './hooks/usePersistedState';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from './styles/themes/light';
import dark from './styles/themes/dark';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}  toggleTheme={toggleTheme} />

        <Dashboard />

        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />
        
      </TransactionsProvider>
    </ThemeProvider>
  );
}
