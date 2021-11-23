// add the fs module
const fs = require('fs');
// add the inquirer module (installed)
const inquirer = require('inquirer');
// add the util module
const util = require("util");
// define a path where the new README file will be saved upon its creation
const pathToFile = '../results/readme.md';
// define the path for the app to search the text template to be used in order to plug in the answers provided by the user
const templateForReadMeFile = require('./README-template.js')
// node function that allows promised-based functions instead of callback-based functions
const writeFileAsync = util.promisify(fs.writeFile);

// define the questions to be added into the README file
function questions () {
    return inquirer.prompt ([
        {
           type: 'input',
            name: 'title',
            message: 'What is the title of your project or homework?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project or homework about? Write a short description'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe the steps to install your application'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the intended use of your application'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please write down the names of any colleagues who contributed to your project or homework'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please describe any automatic tests that were created for your application'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please write down your GitHub username for your contact section'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please write down your email address  for your contact section'
        },
    ]);
}

// async function to start the app using promisify
async function init() {
    try {
        // trigger the questions to be asked
        const answers = await questions();
        // capture responses fromt he user
        const generateReadMeFile = templateForReadMeFile(answers);
        
        // write a new README using the template and plugging in the answers provided as templated strings 
        await writeFileAsync(pathToFile, generateReadMeFile);
        console.log("success");
    }   
        // catch any error and log it
        catch(err) { 
        console.log(err);
    }
}

init();