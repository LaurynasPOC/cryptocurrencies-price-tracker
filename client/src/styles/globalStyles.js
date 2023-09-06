import { createGlobalStyle } from "styled-components";
import { desktop } from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color:  rgba(53, 162, 235, 1);
        --text-color: #F5F5F5;
    }
    * {
        box-sizing: border-box;
        transition: background-color .25s ease-out;
        
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    html, body {
        margin: 0;
        padding: 0;
    }
    body > div {
        position: relative;
        overflow-x: hidden;
    }
    *,button,body,input,textarea {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: inherit;
    }
    body {
        background: #001B26;
        color: var(--text);
        font-size: 14px;
        ::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    h1, h2, h3, h4 {
        font-weight: 600;
    }
    h1 {
        font-size: 72px;
        /* line-height: 124%; */
    }
    h2 {
        font-size: 60px;
    }
    h3 {
        font-size: 48px;
    }
    h4 {
        font-size: 16px;
    }
    h5 {
        font-size: 24px;
    }
    p {
        font-size: 20px;
    }
    span, p, h3, h4 {
        line-height: 1.5;
    }

    @media ${desktop} {
        h1 {
            font-size: 52px;
        }
        h2 {
            font-size: 40px;
        }
        h3 {
            font-size: 34px;   
        }
        h5 {
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }
`;
