module.exports = function (plop) {
    plop.setGenerator("controller", {
        description: "application controller",

        // inquirer prompts
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Controller name?",
            },
        ],

        // actions to perform
        actions: [
            {
                type: "add",
                path: "../src/components/{{pascalCase name}}/index.tsx",
                templateFile: "templates/component.tsx.hbs",
            },
            {
                type: "add",
                path:
                    "../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.tsx",
                templateFile: "templates/styles.ts.hbs",
            },
            {
                type: "add",
                path:
                    "../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
                templateFile: "templates/stories.tsx.hbs",
            },
            {
                type: "add",
                path:
                    "../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
                templateFile: "templates/test.tsx.hbs",
            },
        ],
    });
};
