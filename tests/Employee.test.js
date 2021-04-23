const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization of Instance", () => {
        it("should instantiate an employee instance", () => {
            const testSubject = new Employee();
            expect(typeof(testSubject)).toBe("object");
        });

        it("should set a name to the name property when instantiated", () => {
            const name = "Alyssa";
            const testSubject = new Employee(name)

            expect(testSubject.name).toBe(name);
        })

        it("should set a id to the id property when instantiated", () => {
            const idTest = 123;
            const testSubject = new Employee("foo", idTest)
            
            expect(testSubject.id).toBe(idTest);
        })

        it("should set a email to the email property when instantiated", () => {
            const emailTest = "email@test.com";
            const testSubject = new Employee("foo", 123, emailTest)
            
            expect(testSubject.email).toBe(emailTest);
        })

    })
    describe("Methods in Instance", () => {
        it("should return an employee's name as a string", () => {
            const testValue = "Alyssa";
            const testInstance = new Employee(testValue);

            expect(testInstance.getName()).toBe(testValue)
        })
    })
})