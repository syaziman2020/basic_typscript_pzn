"use strict";
describe("Visibility", () => {
    it("should be visibility like public, protected, private", () => {
        class Counter {
            constructor() {
                this.counter = 10;
            }
            get counterResult() {
                if (this.counter) {
                    return this.counter;
                }
                return this.counter;
            }
            addCount(value) {
                if (value) {
                    return (this.counter += value);
                }
                else {
                    return this.counter;
                }
            }
            subCount(value) {
                if (value) {
                    this.counter = value;
                }
                this.counter = 0;
            }
        }
        class CounteSubTwo extends Counter {
            subCCount(value) {
                this.counter -= value;
            }
        }
        let counter = new Counter();
        counter.addCount(0);
        counter.addCount(100);
        counter.addCount(100);
        let counterSubTwo = new CounteSubTwo();
        counterSubTwo.subCCount(30);
        console.info(counterSubTwo.counterResult);
        console.info(counter.counterResult);
    });
    it("should be parameter properties", () => {
        class Student {
            constructor(name) {
                this.name = name;
            }
        }
        let student = new Student("Uray Syaziman");
        console.info(student);
    });
});
