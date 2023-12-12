import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        font-family: 'Rajdhani', sans-serif;
        width: 100%;
        min-height: 100vh;
        background-color: #e1e1e1;
        color: #1e1e1e;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;
