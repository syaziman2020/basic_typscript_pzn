import { Employee, Manager } from "../src/extends-interface";
import { Seller } from "../src/interface";
import { Person } from "../src/person";

describe("Interface", function () {
  it("should be interface in ts", function () {
    let seller: Seller = {
      id: 1,
      name: "Pakaian",
      seri: "1234567",
    };

    seller.address = "serdam";

    console.info(seller);
  });

  it("should be interface function", function () {
    interface SumNumber {
      (value1: number, value2: number): number;
    }

    let sumOfProfuct: SumNumber = (value1: number, value2: number) => {
      return value1 + value2;
    };
    let result = sumOfProfuct(10, 2);
    console.info(result);
    expect(result).toBe(12);
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    let names: StringArray = ["Uray", "Sasya", "Ziman"];

    console.info(names);
  });

  it("should support interface non numbering", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    let dictionary: StringDictionary = {
      name: "Uray",
      address: "Sepakat",
    };

    console.info(dictionary["name"]);
    console.info(dictionary["address"]);
    console.info(dictionary);
  });

  it("should support interface extends", function () {
    let myManager: Manager = {
      id: 1,
      name: "Uray",
      division: "Front End Developer",
      numberOfEmployee: 10,
    };

    console.info(myManager);
    console.info(myManager.numberOfEmployee);
  });

  it("should be support function interface", function () {
    let person: Person = {
      name: "Uray",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("sasya"));
    console.info(person);
  });

  it("should support intersection types", function () {
    interface HasId {
      id: number;
    }

    interface HasName {
      name: string;
    }

    type Domain = HasId & HasName;

    let domain: Domain = {
      id: 1,
      name: "Uray",
    };

    console.info(domain);
  });

  it("should be assertion on ts", function () {
    let person: any = {
      name: "Uray",
      age: 10,
    };

    let person2: Person = person as Person;

    console.info(person2);
  });

  it("should be interface with class on ts", () => {
    interface HasName {
      name: string;
    }

    interface Working {
      jobRequest(name: string): void;
    }

    class Penjual implements HasName, Working {
      name: string;
      constructor(name: string) {
        this.name = name;
      }

      jobRequest(name: string): void {
        console.info(`my name is ${this.name}, ${name} working correctly`);
      }
    }

    let penjual: Penjual = new Penjual("sasya");
    penjual.jobRequest("uray");
  });
});
