"use strict";
describe("union type", function () {
    it("should be union type", function () {
        let value = "hello world";
        console.info(value);
        value = 100;
        console.info(value);
    });
    it("should be check function union type", function () {
        function getValue(newValue) {
            if (typeof newValue === "string") {
                return newValue.toUpperCase();
            }
            else if (typeof newValue === "number") {
                return newValue * 10;
            }
            else {
                return !newValue;
            }
        }
        console.info(getValue("hello world"));
        console.info(getValue(10));
    });
});
