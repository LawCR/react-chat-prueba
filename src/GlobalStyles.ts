import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
    body {
        /* background-color: #151122; */
        background: linear-gradient(rgba(21,17,34,1), rgba(21,17,34,0.95) );
        background-position: center;
        background-size: cover;
        color: #ddd;
    }
`