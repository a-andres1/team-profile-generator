const { listenerCount } = require("events");
const inquirer = require("inquirer");
const { start } = require("repl");
const Engineer = require("./lib/engineer")
const fs = require("fs");
const renderHtml = require("./src/htmlRenderer")
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
        manager(tName);  
    }
    if (nextFunct === "Engineer"){
        engineer(basicInfoRes, tName);  
    }
    if (nextFunct === "Intern"){
        intern(tName);  
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
    })

//   const cardTemp = `
//   <div class="container mt-3">
//         <div class="tile is-ancestor">
//             <div class="tile is-parent">
//                 <article class="tile is-child box">
//                     <p class="title">ROLE</p>
//                     <p class="subtitle">EMPLOYEE NAME</p>
//                     <p>other stuff</p>
//                     <ul>
//                         <li>ID</li>
//                         <li>EMAIL</li>
//                         <li>MANAGER NAME IF APPLICABLE</li>
//                         <li>ROLE UNIQUE INFO</li>
//                     </ul>
//                 </article>
//             </div>
//         </div>
//     </div>
//   `

}

function manager(tName){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the manager\'s office number?',
            name: 'officenum',
          }
    ]).then((response) =>{
        console.log(response)
        startingPrompt(tName);
    });
};

function intern(tName){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Where does the intern go to school?',
            name: 'school',
          }
    ]).then((response) =>{
        console.log(response)
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
        console.log(engRes )
        const engineer = new Engineer(basicInfoRes.empname, basicInfoRes.empid, basicInfoRes.empemail, engRes.github)
        console.log(engineer)
        teamArr.push(engineer);
        startingPrompt(tName);
    });
};






