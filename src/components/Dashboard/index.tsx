import React, {useContext} from 'react';
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

interface Props {
    toggleTheme(): void;
}

export function Dashboard({toggleTheme}:Props) {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <Summary />

            <Switch className="theme-color"
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
                handleDiameter={20}
                offColor={shade(0.1, colors.backgroundHeader)}
                onColor={colors.backgroundHeader}
            />

            <TransactionsTable />
        </Container>
    );
}