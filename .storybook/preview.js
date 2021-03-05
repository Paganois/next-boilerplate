/* eslint-disable react/jsx-filename-extension */
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withNextRouter } from "storybook-addon-next-router";

import GlobalStyles from "styles/global";
import theme from "styles/theme";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(withNextRouter());

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Story />
        </ThemeProvider>
    ),
];
