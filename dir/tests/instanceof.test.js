"use strict";
describe("Instance Of", () => {
    it("should be instance of for object from class", () => {
        class Employee {
        }
        class Manager {
        }
        let employee = new Employee();
        let manager = new Manager();
        console.info(employee instanceof Employee);
        console.info(manager instanceof Employee);
    });
});
