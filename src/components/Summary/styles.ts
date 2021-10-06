import styled from "styled-components";

export const Container = styled.div`
    
    //Entradas, Saídas e Total
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
    
    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        /*Pq usar o display block para o margin-top funcionar?
        Por padrão, o strong vem com display inline, aí o margin-top não funciona.*/
        strong {
            display: block;  
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background{
            background: var(--green);
            color: #FFF;
        }
    }
`;