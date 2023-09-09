export default function (plop) {
  plop.setGenerator('component', {
    description: 'Creates a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{pascalCase name}}',
        templateFiles: 'plop_templates/component/*.hbs',
        base: 'plop_templates/component',
      },
    ],
  })
  plop.setGenerator('page', {
    description: 'Creates a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/pages/{{pascalCase name}}',
        templateFiles: 'plop_templates/page/*.hbs',
        base: 'plop_templates/page',
      },
    ],
  })
}
