import React from 'react';
import logoImg from '../../assets/logo.svg'

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
} from 'react-icons/md'
import { Container, Header, LogImg, Title, MenuContainer,MenuItemLink }  from './styles';

const NavigationBar: React.FC = () => {

    return (
        <Container >
            <Header>
                <LogImg src={logoImg} alt="Logo imagem"/>
                <Title>Carteira Simulator</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard"> 
                    <MdDashboard/> Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance"> 
                    <MdArrowDownward/> Entrada
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance"> 
                    <MdArrowUpward/>Saida
                </MenuItemLink>
                <MenuItemLink href="#"> 
                    <MdExitToApp/>Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default NavigationBar;