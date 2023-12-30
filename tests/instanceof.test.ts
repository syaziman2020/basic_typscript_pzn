describe("Instance Of", () => {
  it("should be instance of for object from class", () => {
    class Employee {}

    class Manager {}

    let employee: Employee = new Employee();
    let manager: Manager = new Manager();

    console.info(employee instanceof Employee);
    console.info(manager instanceof Employee);
  });
});
