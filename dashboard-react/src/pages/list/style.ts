import styled from 'styled-components'

export const Container = styled.div ``;

export const Content = styled.div ``;

export const Filters = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;

    .tag-filter{
        font-size: 18px;
        font-weight: 500;
        background: transparent;
        color: #FFC4E1;
        margin: 0 10px;
        transition: opacity 0.3;
        border: none;
        border-bottom: 3px solid  #FFC4E1;
        &:hover{
            opacity: 0.7;
        }
    }
`;