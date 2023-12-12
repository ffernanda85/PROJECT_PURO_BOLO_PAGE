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
        color: #545252;
        background-color: #e5dbd0;
    }

`;
