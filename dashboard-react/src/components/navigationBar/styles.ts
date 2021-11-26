import styled from 'styled-components';


export const Container = styled.div`
    grid-area: AS;
    
    background-color: #FF87CA;
    padding-left: 20px;
    border-right: 1px solid #FFF;
    position: relative;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const Title = styled.h3`
    color:#FFF;
    margin-left: 5px;
`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top:30px;
`;

export const MenuItemLink = styled.a`
    margin-top: 10px;
    color: #EED7CE;
    text-decoration: none;
    transition: opacity 0.3s;
    display: flex;
    align-items: center;
    &:hover{
        opacity: 0.6;
    }
    >svg{
        font-size: 20px;
        margin-right: 5px;
    }
`;