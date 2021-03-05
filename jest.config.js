module.exports = {
    testEnvironment: "jsdom",
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts(x)?",
        "!src/**/*.stories.tsx",
        "!src/pages/**/*.tsx",
        "!src/styles/**/*.ts",
        "!src/types/**/*.d.ts",
    ],
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
    modulePaths: ["<rootDir>/src/", "<rootDir>/.jest"],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
    moduleNameMapper: {
        "^styled-components":
            "<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js",
    },
    testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest",
    },
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ],
};
