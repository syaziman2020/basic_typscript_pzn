describe("Interface", function () {
    it("should be interface in ts", function () {
        let seller = {
            id: 1,
            name: "Pakaian",
            seri: "1234567",
        };
        seller.address = "serdam";
        console.info(seller);
    });
    it("should be interface function", function () {
        let sumOfProfuct = (value1, value2) => {
            return value1 + value2;
        };
        let result = sumOfProfuct(10, 2);
        console.info(result);
        expect(result).toBe(12);
    });
    it("should support indexable interface", function () {
        let names = ["Uray", "Sasya", "Ziman"];
        console.info(names);
    });
    it("should support interface non numbering", function () {
        let dictionary = {
            name: "Uray",
            address: "Sepakat",
        };
        console.info(dictionary["name"]);
        console.info(dictionary["address"]);
        console.info(dictionary);
    });
    it("should support interface extends", function () {
        let myManager = {
            id: 1,
            name: "Uray",
            division: "Front End Developer",
            numberOfEmployee: 10,
        };
        console.info(myManager);
        console.info(myManager.numberOfEmployee);
    });
    it("should be support function interface", function () {
        let person = {
            name: "Uray",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("sasya"));
        console.info(person);
    });
    it("should support intersection types", function () {
        let domain = {
            id: 1,
            name: "Uray",
        };
        console.info(domain);
    });
    it("should be assertion on ts", function () {
        let person = {
            name: "Uray",
            age: 10,
        };
        let person2 = person;
        console.info(person2);
    });
    it("should be interface with class on ts", () => {
        class Penjual {
            constructor(name) {
                this.name = name;
            }
            jobRequest(name) {
                console.info(`my name is ${this.name}, ${name} working correctly`);
            }
        }
        let penjual = new Penjual("sasya");
        penjual.jobRequest("uray");
    });
});
export {};
