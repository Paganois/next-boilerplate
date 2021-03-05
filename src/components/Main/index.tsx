import Logo from "../Logo";
import * as S from "./Main.styles";

const Main = ({
    title = "Onyx Boilerplate",
    description = "Boilerplate with Typescript, NextJS, Styled Components, PWA, Storybook, Jest and React Testing Library, ESLint and Husky",
}) => (
    <S.Wrapper>
        <S.Logo>
            <Logo size="large" />
        </S.Logo>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
    </S.Wrapper>
);

export default Main;
