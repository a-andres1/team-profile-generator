const { listenerCount } = require("events");
const inquirer = require("inquirer");
const { start } = require("repl");
const Engineer = require("./lib/engineer");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const fs = require("fs");
const renderHtml = require("./src/htmlRenderer");
teamName();

let teamArr = [];
function teamName(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your team name?',
            name: 'teamname',
          } 
    ]).then((response) =>{
    //   Have the team name write somewhere?
    const tName = response.teamname 
    startingPrompt(tName);
        
    });
};

// function to pick what kind of employee you would like to enter or gives the option to exit
function startingPrompt(tName) {
    inquirer.prompt([
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
        console.log(response);
        if (nextFunct === "Exit"){
            exit(tName);
        }
        else{
            basicInfo(nextFunct, tName );
        }
        
    });
    
    

};

// this info is needed for every employee and I think this makes the code less dry
function basicInfo(nextFunct, tName){
    inquirer.prompt([
       
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
          }
    ]).then((basicInfoRes) =>{
        console.log(basicInfoRes);
        nextEmployee(nextFunct, basicInfoRes, tName);
        
    });

}

// a function to call functions
function nextEmployee(nextFunct, basicInfoRes, tName){
    // if statements for calling the functions
    if (nextFunct === "Manager"){
        manager(basicInfoRes, tName);  
    }
    if (nextFunct === "Engineer"){
        engineer(basicInfoRes, tName);  
    }
    if (nextFunct === "Intern"){
        intern(basicInfoRes, tName);  
    }
    if (nextFunct === "Exit"){
        
        exit(tName);  
    }
};




// this will be where we write the 'write to html' part with all the data
function exit(tName){
    console.log("Exit "+ tName)
  console.log("Bye!")
    fs.writeFile("team.html", renderHtml(teamArr), err => {
        if (err) throw err;
    });

};

function manager(basicInfoRes, tName){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the manager\'s office number?',
            name: 'officenum',
          }
    ]).then((manRes) =>{
        console.log(manRes);
        const manager = new Manager(basicInfoRes.empname, basicInfoRes.empid, basicInfoRes.empemail, manRes.officenum);
        console.log(manager);
        teamArr.push(manager);
        startingPrompt(tName);
    });
};

function intern(basicInfoRes, tName){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Where does the intern go to school?',
            name: 'school',
          }
    ]).then((intRes) =>{
        console.log(basicInfoRes);
        console.log(intRes);
        const intern = new Intern(basicInfoRes.empname, basicInfoRes.empid, basicInfoRes.empemail, intRes.school);
        console.log(intern);
        teamArr.push(intern);
        startingPrompt(tName);
    });
};


function engineer(basicInfoRes, tName){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineer\'s github username?',
            name: 'github',
          }
    ]).then((engRes) =>{
        console.log(tName);
        console.log(engRes );
        const engineer = new Engineer(basicInfoRes.empname, basicInfoRes.empid, basicInfoRes.empemail, engRes.github);
        console.log(engineer);
        teamArr.push(engineer);
        startingPrompt(tName);
    });
};






