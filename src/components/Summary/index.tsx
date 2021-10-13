import { useContext } from 'react';
import iconEntradaImg from '../../assets/Entradas.svg';
import iconSaidaImg from '../../assets/Saídas.svg';
import iconTotalImg from '../../assets/Total.svg';
import { TransactionsContext } from '../../TransactionsContext';


import { Container } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconEntradaImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={iconSaidaImg} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={iconTotalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}