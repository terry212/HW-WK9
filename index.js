// All required files requested
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const inquirer = require("inquirer");
const dotenv = require("dotenv");
const githubUsername = require("./utils/api");
const markdown = require("./utils/generateMarkdown");

const questions = [
    "What is your github username?", // 0
    "What repo needs a README generated?" // 1
    // "What is the title of the project?",
    // "What is the best way to describe the project?",
    // "What code was required for this project?",
    // "What are the usages of this project?",
    // "What is the name of your company or team that will be licensing the project?",
    // "Was there contribution made by someone other than yourself?",
    // "How did you test this project? Get into more details on code and technologies used.",
    // "Do you have any FAQ's?"
];

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: `${questions[0]}`
        }
    ]);
}

function writeToFile(fileName, data) {
}

function init() {
    promptUser()
        .then(function (answers) {
            const username = githubUsername.getUser(answers.username);
        })
        .then(function () {
            console.log("Successfully grabbed username");
        })
        .catch(function (err) {
            console.log(err);
        });
}

init();
