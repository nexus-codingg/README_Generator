// importing all necessary node modules
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./Assets/utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


// what formats the user's answers into a string for the generateMarkdown() function
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
            default: "No email address given."
        },
        {
            type: "input",
            message: "What is the URL of your project on GitHub?",
            name: "url"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            default: "No project title given.",
            name: "title"
        },
        {
            type: "input",
            message: "Please provide a description of your project.",
            default: "No project description given.",
            name: "description"
        },
        {
            type: "input",
            message: "How is your project installed?",
            default: "No installation instructions given.",
            name: "installation"
        },
        {
            type: "input",
            message: "What technologies (i.e. unique CSS Frameworks like Bootstrap, or main programming languages) were used to create your project?",
            name: "technology"
        },
        {
            type: "input",
            message: "Please provide an example of how your project can be used and its functionality.",
            default: "No usage examples given.",
            name: "usage"
        },
        {
            type: "list",
            message: "Please select license name (use arrow keys):",
            name: "license",
            choices: ["MIT", "Apache", "GPL", "Mozilla", "No licenses were used for this project"],
        },
        {
            type: "input",
            message: "Please list all contributors:",
            name: "contributer",
            default: "There are no other contributors at this time."
        },
        {
            type: "input",
            message: "What command is used to run a test?",
            default: "No testing instructions given.",
            name: "tests",
        },
        {
            type: "input",
            message: "What is the best form of communication for any questions?",
            name: "contact", 
        }

    ]);
};

async function init() {
    try {
        // this makes sure all the user inputs have been entered
        // *before* generating the README file
        const userInput = await promptUser();
        const readme = generateMarkdown(userInput);

        await writeFileAsync("README.md", readme);
        console.log("Successfully created README file to root directory");

    } catch (err) {
        console.log(err);
    }
};

init();

// This project can assist developers to make quick, easy README files for their GitHub projects through their terminal