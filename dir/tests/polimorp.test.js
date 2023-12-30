"use strict";
describe("Polimorphism", () => {
    it("should be support polimorphism", () => {
        class Employee {
            constructor(name) {
                this.name = name;
            }
        }
        class Manager extends Employee {
        }
        class VicePresident extends Manager {
        }
        function sayHello(employee) {
            if (employee instanceof VicePresident) {
                let vp = employee;
                console.info(vp.name);
            }
            else if (employee instanceof Manager) {
                let manager = employee;
                console.info(manager.name);
            }
            else if (employee instanceof Employee) {
                let emp = employee;
                console.info(emp.name);
            }
        }
        sayHello(new Employee("Uray"));
        sayHello(new Manager("Syaziman"));
        sayHello(new VicePresident("Sasya"));
    });
});
