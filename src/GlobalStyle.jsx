import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        font-family: 'Rajdhani', sans-serif;
        max-width: 100vw;
        min-height: 100vh;
        color: #545252;
        background-color: #e1e1e1;
    }

    /* fonts.css */

    @font-face {
        font-family: 'Candy-Black';
        src: url('/candy_shop_2/Candy Shop Black Personal Use.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Candy-Contour';
        src: url('/candy_shop_2/Candy Shop Contour Personal Use.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Candy-Personal';
        src: url('/candy_shop_2/Candy Shop Personal Use.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;
