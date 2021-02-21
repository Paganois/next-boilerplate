import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Head from "next/head";

import GlobalStyle from "styles/global";
import theme from "styles/theme";

const pageOptions = {
    title: "Onyx - Next Boilerplate",
    description: "Boilerplate to Onyx Projects",
    image: "",
    siteUrl: "https://onyx.gg",
    twitterAccount: "@onyxggbr",
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                {/* Title */}
                <title>{pageOptions.title}</title>
                <meta name="keywords" content={pageOptions.title} />

                {/* Description */}
                <meta name="description" content={pageOptions.description} />
                <meta
                    property="og:description"
                    content={pageOptions.description}
                />

                {/* Image */}
                <meta name="twitter:image" content={pageOptions.image} />
                <meta property="og:image" content={pageOptions.image} />

                {/* URL */}
                <meta property="og:url" content={pageOptions.siteUrl} />
                <meta
                    name="twitter:site"
                    content={pageOptions.twitterAccount}
                />

                {/* General */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />

                {/* Use this site to generate favicons -> https://realfavicongenerator.net/ */}
                {/* Favicon */}
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="57x57"
                    href="/img/apple-touch-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="114x114"
                    href="/img/apple-touch-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="72x72"
                    href="/img/apple-touch-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="144x144"
                    href="/img/apple-touch-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="120x120"
                    href="/img/apple-touch-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="152x152"
                    href="/img/apple-touch-icon-152x152.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon-32x32.png"
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon-16x16.png"
                    sizes="16x16"
                />
                <link
                    rel="mask-icon"
                    href="/img/safari-pinned-tab.svg"
                    color="#1e0b36"
                />
                <meta name="msapplication-TileColor" content="#1e0b36" />
                <meta
                    name="msapplication-TileImage"
                    content="/img/mstile-144x144.png"
                />
                <meta
                    name="description"
                    content="Marketplace for multiple purposes"
                />
                <link rel="manifest" href="manifest.json" />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
