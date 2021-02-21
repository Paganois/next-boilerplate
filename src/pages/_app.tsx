import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Head from "next/head";

import GlobalStyle from "styles/global";
import theme from "styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Onyx - Next Boilerplate</title>
                <link
                    rel="shortcut icon"
                    href="/img/icon-512.png"
                    type="image/x-icon"
                />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="manifest.json" />
                <meta
                    name="description"
                    content="Marketplace for multiple purposes"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
