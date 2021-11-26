import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    *{
        width: 100%;
        height: 100vh;
        background-color: #FFAB4C;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html, #root{
        height: 100%;
    }

    *, button , :-ms-input-placeholder{
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;
    }
`;