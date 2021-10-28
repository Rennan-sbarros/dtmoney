import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: ${props => props.theme.colors.textBody};
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: ${props => props.theme.colors.shape};
            color: ${props => props.theme.colors.textBody};

            &:first-child {
                color: ${props => props.theme.colors.textTitle};
            }

            &.deposit {
                color: #33cc95;
                
            }

            &.withdraw {
                color: red;
            }

            @media screen and (max-width:720px) {
                padding: 5px;
            }
        }   
    }
    
    @media screen and (max-width:720px) {
        table {
            th {
                padding: 0;
            }
            td {
                padding: 0;
            }
        }
        .chart-content {
            display:none;
            }
    }
`;