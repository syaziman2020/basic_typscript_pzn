describe("type alias", function () {
    it("should be type alias", function () {
        let category = {
            id: "satu",
            category: "Limited",
        };
        let product = {
            id: 1,
            name: "Tas Polo",
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
