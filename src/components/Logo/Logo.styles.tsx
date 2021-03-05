import styled, { css } from "styled-components";

import { LogoProps } from ".";

const wrapperModifiers = {
    small: () => css`
        width: 12rem;
    `,

    medium: () => css`
        width: 18rem;
    `,

    large: () => css`
        width: 26rem;
    `,

    hideText: () => css`
        svg {
            pointer-events: none;
        }
        .text {
            display: none;
        }
    `,
};

export const Wrapper = styled.div<LogoProps>`
    ${({ theme, color, size, hideText }) => css`
        color: ${theme.colors[color!]};

        ${!!size && wrapperModifiers[size]};
        ${!!hideText && wrapperModifiers.hideText};
    `}
`;
