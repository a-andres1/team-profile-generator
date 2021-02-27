const askyTime = require("inquirer"); 


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){

    }

    getId(){

    }

    getEmail(){

    }

    getRole(){

    }

}

class Manager extends Employee {
    constructor(officeNumber){
        super(1);
    }
    
    getRole() {

        }
    
}

class Engineer extends Employee {
    constructor(gitHub){
        super(gitHub);
    }

    getGithub(){
        
    }
    
    getRole() {

        }
    
}


