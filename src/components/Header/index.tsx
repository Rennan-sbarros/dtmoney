import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }:HeaderProps ) {
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
            </Content>
        </Container>
    )
}