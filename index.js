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
            type: 'input',
            message: 'What is the employee\'s name?',
            name: 'empname',
          },
        {
            type: 'input',
            message: 'What is the employee\'s id?',
            name: 'empid',
          },
        {
            type: 'input',
            message: 'What is the employee\'s email?',
            name: 'empemail',
          },
        {
            type: "list",
            name: "choosefunction",
            message: "What is the employee\'s role?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Exit",
            ]
        }   
    ]).then((response) =>{
        var nextFunct = response.choosefunction
        nextEmployee(nextFunct);
        // console.log(nextFunct);
    });
    
    

};

// a function to call functions
function nextEmployee(nextFunct){
    // if else statements for calling the functions
    if (nextFunct === "Manager"){
        manager();  
    }
    if (nextFunct === "Engineer"){
        engineer();  
    }
    if (nextFunct === "Intern"){
        intern();  
    }
    if (nextFunct === "Exit"){
        exit();  
    }

};




// this will be where we write the 'write to html' part with all the data?
function exit(){
  console.log("Bye!")
}

function manager(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the manager\'s office number?',
            name: 'officenum',
          }
    ]).then((response) =>{
        console.log(response)
        startingPrompt();
    });
};

function intern(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Where does the intern go to school?',
            name: 'school',
          }
    ]).then((response) =>{
        console.log(response)
        startingPrompt();
    });
};


function engineer(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineer\'s github username?',
            name: 'github',
          }
    ]).then((response) =>{
        console.log(response)
        startingPrompt();
    });
};






