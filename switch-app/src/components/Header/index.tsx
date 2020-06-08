import React, { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components'; // para pegar informações do tema.
import { Container  } from './styles';
import { shade } from 'polished'; // 'polished' para trabalhar com cores

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    return (
        <Container>
            Hello World

            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
    );
}

export default Header;