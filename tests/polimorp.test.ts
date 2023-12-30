describe("Polimorphism", () => {
  it("should be support polimorphism", () => {
    class Employee {
      constructor(public name?: string) {}
    }

    class Manager extends Employee {}

    class VicePresident extends Manager {}

    function sayHello(employee: Employee): void {
      if (employee instanceof VicePresident) {
        let vp: VicePresident = employee as VicePresident;
        console.info(vp.name);
      } else if (employee instanceof Manager) {
        let manager: Manager = employee as Manager;
        console.info(manager.name);
      } else if (employee instanceof Employee) {
        let emp: Employee = employee as Employee;
        console.info(emp.name);
      }
    }

    sayHello(new Employee("Uray"));
    sayHello(new Manager("Syaziman"));
    sayHello(new VicePresident("Sasya"));
  });
});
