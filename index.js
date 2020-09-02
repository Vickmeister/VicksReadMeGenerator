// array of questions for user
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
    type: "input",
    message: "Name your title",
    name: "title"
    },
{
    type: "input",
    message: "Project description",
    name: "description"
},
{
    type: "input",
    message: "Provide table of contents",
    name: "tableofcontents"
},
{   
    type: "input",
    message: "How do we use this Readme?",
    name: "usage"
},
{
    type: "list",
    message: "Select license",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},
{
    type: "input",
    message: "enter contributions",
    name: "Contributions"
},
{
    type: "input",
    message: "What tests were performed?",
    name: "tests"
},
{
    type: "input",
    message: "Do you have any questions?",
    name: "questions"
},
]

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName) ,data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("readme.md", generateMarkdown({...inquirerResponses}))
    })

}

// function call to initialize program
init();

