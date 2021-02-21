import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    html {
        font-size: 65%;
    }

    html, body, #__next {
        height: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
