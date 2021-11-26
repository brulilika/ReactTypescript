import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;
    background-color: #EAEAEA;
    padding:10px;

    height: calc(100vh-70px);
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #ff87c9e1;
        border-radius: 10px
    }

    :-webkit-scrollbar-tracks{
        background-color: #ff87c9e1;
        border-radius: 10px
    }
`;
