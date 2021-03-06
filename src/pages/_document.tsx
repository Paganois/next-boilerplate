import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentProps,
} from "next/document";

import { ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";

export default class MyDocument extends Document<DocumentProps> {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    {/* Make Color mode to persists when you refresh the page. */}
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
