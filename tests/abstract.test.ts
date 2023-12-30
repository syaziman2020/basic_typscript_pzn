describe("Abstract Class", () => {
  it("should support abstract class", () => {
    abstract class Customer {
      readonly id: number;
      abstract name: string;
      constructor(id: number) {
        this.id = id;
      }

      abstract sayHai(name: string): void;
    }

    class RegularCustomer extends Customer {
      name: string;
      constructor(id: number, name: string) {
        super(id);
        this.name = name;
      }

      sayHai(): void {
        console.info(`Hello my name is ${this.name}`);
      }
    }

    let regular: RegularCustomer = new RegularCustomer(1, "Uray");
    regular.sayHai();
  });
});
