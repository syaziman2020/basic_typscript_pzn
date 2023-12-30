"use strict";
describe("function", function () {
    it("should be function", function () {
        function sayLove(name) {
            return `I Love You ${name}`;
        }
        function sayHai() {
            console.info("Hello good people");
        }
        console.info(sayLove("Sasya"));
        sayHai();
    });
    it("should be function with parameter", function () {
        function justInfo(name = "People") {
            console.info(name);
        }
        justInfo();
    });
    it("should be function with many parameters", function () {
        function allSumOnLoop(...numbers) {
            let total = 0;
            //mirip foreach
            //   for (const numb of numbers) {
            //     total += numb;
            //   }
            //berdasarkan index
            for (const numb in numbers) {
                total += numbers[numb];
            }
            return total;
        }
        let result = allSumOnLoop(10, 20, 30, 40, 50);
        console.info(result);
    });
    it("should be function overloading", function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
            else {
                return undefined;
            }
        }
        console.info(callMe("Sasya"));
        console.info(callMe(10));
    });
    it("should be function with parameters funct", function () {
        function sayGreeting(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        let result = sayGreeting("Sasya", (name) => name.toUpperCase());
        console.info(result);
    });
});
