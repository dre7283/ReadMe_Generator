// Packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs')
const path = require('path');
// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?",
    },
    {
        type:"input",
        name:"installation",
        message:"how will you install?",
        default: "npm i inquirer@8.2.4",
    },
    {
        type:"input",
        name:"test",
        message:"how will you test?",
        default: "npm test",
    },
    {
        type:"input",
        name:"usage",
        message:"What does the user need to know about using the repo?",
    },
    {
        type:"input",
        name:"contributing",
        message: "What does the user need to know about contributing to the repo?"
    },
    {
        type:"input",
        name:"github",
        message:"What is your github username?",
    },
    {
        type:"input",
        name:"email",
        message:"What is your email address?",
    },
    {
        type:"list",
        name:"license",
        message:"choose the following license",
        choices: ["APACHE 2.0", "MIT", "BSD 3", "GPL 3.0", "None"],
    },
];

// Function to write README based on user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// Function intializes and writes README
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        writeToFile("./output/README.md", generateMarkdown(data) )
      });
}

// Function call to initialize app
init();
