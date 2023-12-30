"use strict";
describe("Class", function () {
    it("should be class on ts", function () {
        class Customer {
            constructor() {
                console.info("Hello Customer");
            }
        }
        class Seller {
        }
        let customer = new Customer();
        let seller = new Seller();
    });
    it("should be class with properties", () => {
        class People {
            constructor(id, name, age) {
                this.id = id;
                this.name = name;
                this.age = age !== null && age !== void 0 ? age : 0;
            }
            //kalau method tidak perlu lagi menulis kata "function"
            sayMeet() {
                console.info(`Hello ${this.name}`);
            }
        }
        let myPeople = new People(1, "Syaziman", 17);
        myPeople.sayMeet();
        console.info(myPeople);
    });
    it("should be getter and setter on ts", () => {
        class Student {
            constructor(name) {
                this._name = name;
            }
            get name() {
                if (this._name) {
                    return this._name;
                }
                return "empty";
            }
            set name(value) {
                if (value !== "") {
                    this._name = value;
                }
            }
        }
        let student = new Student();
        let studentName = student.name;
        console.info(studentName);
        student.name = "sasya";
        console.info(student.name);
    });
});
