import { render } from "@testing-library/react";
import { ReactElement } from "react";
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

// @ts-ignore
const Providers = ({ children }): ReactElement => {
    return children;
    // return (
    //   <ThemeProvider theme="light">
    //     <TranslationProvider messages={defaultStrings}>
    //       {children}
    //     </TranslationProvider>
    //   </ThemeProvider>
    // )
};

const customRender = (ui: ReactElement, options = {}) =>
    render(ui, { wrapper: Providers as React.ComponentType, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
