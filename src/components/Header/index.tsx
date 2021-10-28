import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'
import Switch from 'react-switch';
import { shade } from "polished";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
    toggleTheme(): void;
}

export function Header({ onOpenNewTransactionModal, toggleTheme }:HeaderProps ) {
    const { colors, title } = useContext(ThemeContext);
    
    const clearTransactions = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <div>
                    <button type="button" onClick={clearTransactions}>
                        Limpar transações
                    </button>
                    <button type="button" onClick={onOpenNewTransactionModal}>
                        Nova transação
                    </button>
                    
                </div>
                <Switch 
                    className="mode-dark"
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    width={40}
                    handleDiameter={20}
                    offColor={shade(0.1, colors.green)}
                    onColor={colors.blueLight}
                />                               
            </Content>
            
        </Container>
    )
}