describe("Class", function () {
  it("should be class on ts", function () {
    class Customer {
      constructor() {
        console.info("Hello Customer");
      }
    }

    class Seller {}

    let customer: Customer = new Customer();
    let seller: Seller = new Seller();
  });

  it("should be class with properties", () => {
    class People {
      id: number;
      name: string;
      age?: number;

      constructor(id: number, name: string, age?: number) {
        this.id = id;
        this.name = name;
        this.age = age ?? 0;
      }

      //kalau method tidak perlu lagi menulis kata "function"
      sayMeet(): void {
        console.info(`Hello ${this.name}`);
      }
    }

    let myPeople: People = new People(1, "Syaziman", 17);
    myPeople.sayMeet();

    console.info(myPeople);
  });

  it("should be getter and setter on ts", () => {
    class Student {
      _name?: string;
      constructor(name?: string) {
        this._name = name;
      }

      get name(): string {
        if (this._name) {
          return this._name;
        }
        return "empty";
      }

      set name(value: string) {
        if (value !== "") {
          this._name = value;
        }
      }
    }

    let student: Student = new Student();

    let studentName = student.name;
    console.info(studentName);

    student.name = "sasya";

    console.info(student.name);
  });
});
