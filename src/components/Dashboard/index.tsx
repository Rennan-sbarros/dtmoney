import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";
import Switch from 'react-switch';

export function Dashboard() {
    return (
        <Container>
            <Summary />

            <Switch className="theme-color"
                onChange={() => {}}
                checked={true}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
                handleDiameter={20}
            />

            <TransactionsTable />
        </Container>
    );
}