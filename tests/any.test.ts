describe("any data type", function () {
  it("it should be any data type", function () {
    let name: any = "Uray Syaziman";
    console.info(name);

    let person: any = {
      id: 1,
      name: "sasya",
      age: 21,
    };
    person.name = "sasya sayang";
    person.address = "serdam";
    console.info(person);
    console.info(person.name);
  });
});
