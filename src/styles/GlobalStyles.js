import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
    font-size: 62.5%;
    box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing:inherit;
    }
    body {
        margin:0;
        padding:0;
        overflow-x: hidden;
        line-height: 1.2;
        color: ${(props) => props.theme.colors.blackColor};
        @import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600;700&display=swap" rel="stylesheet');
        font-family: ${(props) => props.theme.fonts};
        font-weight: ${(props) => props.theme.fontWeight.light};
        font-size: ${(props) => props.theme.fontSizes.regular};
        background-color: ${(props) => props.theme.colors.powderWhite};
    }
    p {
        margin: 0;
        padding:0;
    }
    h1,h2,h3,h4,h5,h6 {
        padding: 0;
        margin:0;
        line-height:1.1;
    }

    h1,h2,h3 {
        margin-bottom:15px;
        text-transform:uppercase;
    }
    h1 {
        font-size:3rem;
         font-weight: ${(props) => props.theme.fontWeight.semiBold};
    }
    h2 {
        font-size:2.2rem;
        font-weight: ${(props) => props.theme.fontWeight.regular};
    }

    h3 {
        font-size:1.8rem;
        font-weight: ${(props) => props.theme.fontWeight.light};
    }
    .margin-auto {
        margin:0 auto;
    }

    .text-center {
        text-align: center;
    }
    .card-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height:100vh;
        flex-direction:column;
        flex:1;
        padding: 50px;
    }
   
    input[type="text"] {
        height: 45px;
        width: calc(100% - 200px);
        background-color: ${(props) => props.theme.colors.whiteColor};
        padding:5px;
        color: ${(props) => props.theme.colors.blackColor};
        border:1px solid ${(props) => props.theme.colors.lightGrey};
        outline: none !important;
    }
    .button-container {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        margin: 0 auto;
        flex:1;
    }
    .cta-button {
        min-width:160px;
        height:45px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        background-color: #323232;
        border:none;
        color: ${(props) => props.theme.colors.lightGrey};
        margin: 0;
        padding: 0 18px;
       
        cursor:pointer;
        outline: none !important;
        &:disabled {
            cursor: not-allowed;
            opacity: 0.3;
        }
       
        span {
            display: block;
            font-weight: ${(props) => props.theme.fontWeight.semiBold};
            text-transform: uppercase;
            color: inherit;
        }
    }
`;
