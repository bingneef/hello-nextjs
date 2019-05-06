function componentGenerator(plop) {
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "Component/Component.tsx.hbs"
      },
      {
        type: "add",
        path:
          "../src/components/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "Component/Component.test.js.hbs"
      },
      {
        type: "add",
        path:
          "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "Component/Component.module.scss.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.js",
        templateFile: "Component/index.js.hbs"
      },
      {
        type: "add",
        path: "../src/components/index.js",
        templateFile: "injectable-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "../src/components/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`
      },
      {
        type: "append",
        path: "../src/components/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      }
    ]
  });
}

function pageGenerator(plop) {
  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../pages/{{snakeCase name}}/index.tsx",
        templateFile: "Page/Page.tsx.hbs"
      },
      {
        type: "add",
        path: "../pages/{{snakeCase name}}/{{snakeCase name}}.test.js",
        templateFile: "Page/Page.test.js.hbs"
      }
    ]
  });
}

function serviceGenerator(plop) {
  plop.setGenerator("service", {
    description: "Create service",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your service name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/services/{{pascalCase name}}/{{pascalCase name}}.ts",
        templateFile: "Service/service.ts.hbs"
      },
      {
        type: "add",
        path: "../src/services/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "Service/service.test.js.hbs"
      },
      {
        type: "add",
        path: "../src/services/{{pascalCase name}}/index.js",
        templateFile: "injectable-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "../src/services/{{pascalCase name}}/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`
      },
      {
        type: "append",
        path: "../src/services/{{pascalCase name}}/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      },
      {
        type: "add",
        path: "../src/services/index.js",
        templateFile: "injectable-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "../src/services/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`
      },
      {
        type: "append",
        path: "../src/services/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      }
    ]
  });
}

function hookGenerator(plop) {
  plop.setGenerator("hook", {
    description: "Create a custom react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your hook name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/hooks/{{camelCase name}}/{{camelCase name}}.ts",
        templateFile: "Hook/hook.ts.hbs"
      },
      {
        type: "add",
        path: "../src/hooks/{{camelCase name}}/{{camelCase name}}.test.js",
        templateFile: "Hook/hook.test.js.hbs"
      },
      {
        type: "add",
        path: "../src/hooks/{{camelCase name}}/index.js",
        templateFile: "injectable-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "../src/hooks/{{camelCase name}}/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`
      },
      {
        type: "append",
        path: "../src/hooks/{{camelCase name}}/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`
      },
      {
        type: "add",
        path: "../src/hooks/index.js",
        templateFile: "injectable-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "../src/hooks/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`
      },
      {
        type: "append",
        path: "../src/hooks/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`
      }
    ]
  });
}

module.exports = plop => {
  componentGenerator(plop);
  pageGenerator(plop);
  serviceGenerator(plop);
  hookGenerator(plop);
};
