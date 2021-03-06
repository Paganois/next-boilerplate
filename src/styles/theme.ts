import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    fonts: {
        body: "Roboto, system-ui, sans-serif",
        heading: "Roboto, system-ui, sans-serif",
        mono: "Menlo, monospace",
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700,
    },
    colors: {
        onyx: {
            500: "#1e0b36",
        },
    },
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    styles: {
        global: {
            body: {
                fontFamily: "body",
                fontSize: "md",
            },
        },
    },
});

export default customTheme;
