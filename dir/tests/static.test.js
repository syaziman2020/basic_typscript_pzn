"use strict";
describe("Static", () => {
    it("should be static properties", () => {
        class Helper {
        }
        Helper.NAME = "Uray Syaziman";
        Helper.ID = 1.0;
        Helper.ADDRESS = "Sepakat 2";
        console.info(Helper.NAME);
        console.info(Helper.ID);
        console.info(Helper.ADDRESS);
    });
});
