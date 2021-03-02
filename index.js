const { listenerCount } = require("events");
const inquirer = require("inquirer");
const { start } = require("repl");

startingPrompt();

function startingPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your team name?',
            name: 'teamname',
          },
        {
            type: "list",
            name: "choosefunction",
            message: "Which team mates info are you entering?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ]
        }   
    ]).then((response) =>
    (console.log(response)))
}





// function employee(){
//     inquirer.prompt([


//     ])
// }

// function manager(){
//     inquirer.prompt([

//     ])

// }

// function intern(){
//     inquirer.prompt([

//     ])
// }


// function engineer(){
//     inquirer.prompt([

//     ])

// }






