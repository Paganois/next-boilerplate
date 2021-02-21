import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
    ${({ theme }) => css`
        html,
        body {
            padding: 0;
            margin: 0;
            font-family: ${theme.font.family.body};
            font-size: ${theme.font.size.medium};
        }
    `}

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
