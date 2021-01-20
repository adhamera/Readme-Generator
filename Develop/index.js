
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const mdGen = require('./utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
    /* Questions here */
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "How would you describe your project?",
      name: "description",
    },
    {
      type: "list",
      message: "What type of license do you prefer to use?",
      name: "license",
      choices: ["MIT", "ISC", "GNU GPLv3", "Apache"],
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    { type: "input", 
    message: "What is a good email address for you?", 
    name: "email" },
    {
      type: "input",
      message: "Is anyone else contributing to this project?",
      name: "contributors",
    },
    {
      type: "input",
      message:
        "How can I test your project?",
      name: "tests",
    },
  ]);
}
  
async function init() {
  try {
    const answers = await promptUser();

var filename = "README_trial.md";
const data = mdGen(answers);


    await writeFileAsync(filename, data);

    console.log("Successfully wrote to README_trial.md");
  } catch(err) {
    console.log(err);
  }
}


init();
  
