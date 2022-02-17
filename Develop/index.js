// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is your project name?", 
    "Please provide a brief description of your project below:",  
    "What are the steps required to install your project? ", 
    "Provide instructions on how to use your project. Include screenshots if you would like.", 
    "Please name your collaborators:",
    `Please include a license for your project: 
    If you need help finding a license, visit 'choosealicense.com' and come back to this section`,
    "Please announce any features for your project:",
    "Please jot down any guidelines for future contributing:",
    "Please include any tests to display for your project:"

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your READMe.md File has been created'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: `What is your github username?`,
            validate: userInput => {
                if (userInput) {
                    return true;
                } 
                else {
                     console.log("Please enter your name!")
                     return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter in your email address:",
            validate: function(email)
            {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
           type: 'input',
           name: 'projectName',
           message: `${questions[0]}`,
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } 
               else {
                    console.log("Please enter your project's name!")
                    return false;
                }
            } 
        },
        {
            type: 'editor',
            name: 'description',
            message: `${questions[1]}`,
            validate: descInput => {
                if (descInput) {
                    return true;
                } 
                else {
                     console.log("Please enter your project's description!")
                     return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'installation',
            message: `${questions[2]}`,
        },
        {
            type: 'editor',
            name: 'usage',
            message: `${questions[3]}`,
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } 
                else {
                     console.log("Please enter your instructions on how to use your project!")
                     return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'collaborations',
            message: `${questions[4]}`,
            validate: collabsInput => {
                if (collabsInput) {
                    return true;
                } 
                else {
                     console.log("Please enter your collaborators!")
                     return false;
                }
            } 
        },
        {
            type: 'list',
            name: 'license',
            message: `${questions[5]}`,
            choices: [
                "GNU AGPLv3",
                "GNU GPLv3",
                "GNU LGPLv3",
                "Mozilla Public",
                "Apache",
                "MIT",
                "Boost Software",
                "The Unlicense",
                "Other"
            ],
        },
        {
            type: 'input',
            name: 'otherLicense',
            message: 'What is the name of the license you are adding to your project?',
            when: (answers) => answers.license === "Other"

        },
        {
            type: 'editor',
            name: 'features',
            message: `${questions[6]}`,
            validate: featuresInput => {
                if (featuresInput) {
                    return true;
                } 
                else {
                     console.log("Please enter features about your project!")
                     return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'contributors',
            message: `${questions[7]}`,
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } 
                else {
                     console.log("Please key in any guidelines for future contributors!")
                     return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'tests',
            message: `${questions[8]}`,
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } 
                else {
                     console.log("Please enter in instructions on how to test your project!")
                     return false;
                }
            }
        },
        
    ])

}

// Function call to initialize app
init()
    .then(data => {
        console.log(data);
        return generateReadMe(data);
        
    })
    .then(generatedData => {
        console.log(generatedData);
        writeToFile('./README.md', generatedData);
    })
    .catch(err => {
        console.log(err);
    })
