// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your title of your application?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your description of your application?",
    name: "description",
  },
  {
    type: "list",
    message: "What license does your application have?",
    name: "license",
    choices: ["MIT", "Apache", "GPL"],
  },
  {
    type: "input",
    message: "What commands should be run to install dependences?",
    name: "installation",
  },
  {
    type: "input",
    message: "What command should be used to run tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What command should be used for the usage?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who else contributed to this application?",
    name: "contributers",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your github?",
    name: "github",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
  const response = await inquirer.prompt(questions);
  console.log(response);
}

// Function call to initialize app
init();
