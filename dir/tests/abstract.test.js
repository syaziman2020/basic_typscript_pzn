"use strict";
describe("Abstract Class", () => {
    it("should support abstract class", () => {
        class Customer {
            constructor(id) {
                this.id = id;
            }
        }
        class RegularCustomer extends Customer {
            constructor(id, name) {
                super(id);
                this.name = name;
            }
            sayHai() {
                console.info(`Hello my name is ${this.name}`);
            }
        }
        let regular = new RegularCustomer(1, "Uray");
        regular.sayHai();
    });
});
