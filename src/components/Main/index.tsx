import { Flex, Text, Heading } from "@chakra-ui/react";
import Logo from "../Logo";

const Main = ({
    title = "Onyx Boilerplate",
    description = "Boilerplate with Typescript, NextJS, Styled Components, PWA, Storybook, Jest and React Testing Library, ESLint and Husky",
}) => (
    <div>
        <Flex
            backgroundColor="onyx.500"
            flexDir="column"
            color="white"
            height="100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Logo />
            <Heading fontSize="3xl" paddingTop="5">
                {title}
            </Heading>
            <Text fontSize="xl" width="min(35rem, 100%)" textAlign="left" p={4}>
                {description}
            </Text>
        </Flex>
    </div>
);

export default Main;
