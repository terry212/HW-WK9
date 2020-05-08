// All required files requested
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const api = require("./utils/api");
const markdown = require("./utils/generateMarkdown");

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
    fs.writeFile(fileName, data, function (error) {
        if (error) throw error;
    });
}

function init() {
    return inquirer.prompt(questions)
        .then(function (answers) {
            markdown(answers);
            const userMarkdown = markdown(answers);
            api.getUser(answers);
            writeToFile("Test1.md", userMarkdown);
        })
        .then(function () {
            console.log("Success!");
        })
        .catch(function (err) {
            console.log(err);
        });
}

init();
