import styled from "styled-components";

export const Container = styled.header`
    background: ${props => props.theme.colors.backgroundHeader};
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        gap: 1.5rem;

        button {
        font-size: 1rem;
        color: #FFF;
        background: ${props => props.theme.colors.blueLight};
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        &:hover {
            filter: brightness(0.9);
        }

        transition: filter 0.2s;
    }
}
    .mode-dark{
        margin-top: 0.7rem;
    }

    @media screen and (max-width:720px) {
        flex-direction:column;
        align-items: center;
        justify-content: center;

        padding: 2rem 1rem 9.5rem;
        
        button {
            margin-top: 1rem;
        }

        .mode-dark{
            margin-top: 2rem;
            display: grid;
        }
    }
`;