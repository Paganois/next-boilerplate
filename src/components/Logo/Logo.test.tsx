// import { renderWithTheme } from "utils/tests/helpers";
import { screen } from "@testing-library/react";

// import Logo from ".";

describe("<Logo />", () => {
    it("should render a white label by default", () => {
        // renderWithTheme(<Logo />);
        // expect(screen.getByLabelText(/Onyx/i).parentElement).toHaveStyle({
        //     color: "#FFFFFF",
        // });
    });

    it("should render a black label when color is passed", () => {
        // renderWithTheme(<Logo color="black" />);
        // expect(screen.getByLabelText(/Onyx/i).parentElement).toHaveStyle({
        //     color: "#000000",
        // });
    });

    it("should render a normal logo when size is default", () => {
        // renderWithTheme(<Logo />);
        // expect(screen.getByLabelText(/Onyx/i).parentElement).toHaveStyle({
        //     width: "20rem",
        // });
    });

    it("should render a small logo", () => {
        // renderWithTheme(<Logo size="small" />);
        // expect(screen.getByLabelText(/Onyx/i).parentElement).toHaveStyle({
        //     width: "14rem",
        // });
    });

    it("should render a bigger logo", () => {
        // renderWithTheme(<Logo size="large" />);
        // expect(screen.getByLabelText(/Onyx/i).parentElement).toHaveStyle({
        //     width: "28rem",
        // });
    });

    it("should render a logo without text if hideText", () => {
        // renderWithTheme(<Logo hideText />);
        // expect(
        //     screen
        //         .getByLabelText(/Onyx/i)
        //         .parentElement?.getElementsByClassName("text")[0]
        // ).toHaveStyle({
        //     display: "none",
        // });
    });
});
