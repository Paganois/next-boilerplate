import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Head from "next/head";

import GlobalStyle from "styles/global";
import theme from "styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Onyx - Next Boilerplate</title>
                {/* Use this site to generate favicons -> https://realfavicongenerator.net/ */}
                <link
                    rel="shortcut icon"
                    href="/img/icon-512.png"
                    type="image/x-icon"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/img/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/img/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/img/favicon-16x16.png"
                />
                <link
                    rel="mask-icon"
                    href="/img/safari-pinned-tab.svg"
                    color="#1e0b36"
                />
                <link rel="manifest" href="manifest.json" />
                <meta name="msapplication-TileColor" content="#1e0b36" />
                <meta
                    name="description"
                    content="Marketplace for multiple purposes"
                />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
