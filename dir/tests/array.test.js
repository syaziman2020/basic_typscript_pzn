"use strict";
describe("Array", function () {
    it("should same with js but different syntax", function () {
        let name = "Uray Syaziman";
        let status = true;
        let age = 22;
        console.info(name);
        console.info(status);
        console.info(age);
    });
    it("should same with js array", function () {
        let names = ["ziman", "uray", "sasya"];
        let ages = [10, 20, 25];
        console.info(names);
        console.info(ages);
    });
    it("should be read only for this array and tuple", function () {
        let hobbies = ["bucin", "swimming", "eating"];
        console.info(hobbies);
        //tuple sudah ditentukan tipe datanya setiap index
        let styles = ["using css", 10, true];
        console.info(styles);
    });
});
