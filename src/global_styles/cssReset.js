import styled, { createGlobalStyle } from 'styled-components';

const CssReset = createGlobalStyle`
    
    html, body, main, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        line-height: 1;
        font-size: 1.6rem;
        overflow-x: hidden;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",monospace;
    }

    ul {
        list-style-type: none;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    *:focus {
        outline:none;
    }

    textarea {
        resize: none;
    }

    textarea:focus {
        outline:none;
    }
    
    button {
        border:0;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color:inherit;
    }

    input {
        border: none;
        box-sizing: border-box;
    }

    /* remove spinners from input number */
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

`;

export default CssReset;