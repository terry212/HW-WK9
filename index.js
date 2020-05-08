// All required files requested
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const inquirer = require("inquirer");
const dotenv = require("dotenv");
const api = require("./utils/api");
const markdown = require("./utils/generateMarkdown");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the best way to describe the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What code was required for this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the usages of this project?"
    },
    {
        type: "input",
        name: "author",
        message: "Who is the author that will be licensing the project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Was there contribution made by someone other than yourself?"
    },
    {
        type: "input",
        name: "tests",
        message: "How did you test this project? Get into more details on code and technologies used."
    }
    // {
    //     type: "confirm",
    //     name: "FAQ",
    //     message: "Do you have any FAQ's?"
    // }
    // "What repo needs a README generated?"
];

function writeToFile(fileName, data) {
}

function init() {
    return inquirer.prompt(questions)
        .then(function (answers) {
            // console.log(answers.username);
            // const username = answers.username;
            // const testApi = api.getUser(answers.username);
            // console.log(api.getUser(username));
            markdown(answers);
            api.getUser(answers); 
            console.log(api);
        })
        .then(function () {
            console.log("Successfully grabbed username");
        })
        .catch(function (err) {
            console.log(err);
        });
}

init();
