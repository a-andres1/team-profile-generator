class Employee {
    constructor(nameVal, id, email) {
        this.name = nameVal;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee"
    }

}

// will need to export
module.exports = Employee