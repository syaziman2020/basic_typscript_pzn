describe("Object", function () {
  it("should be an object", function () {
    let person: { id: number; name?: string } = {
      id: 1,
      name: "sasya",
    };

    console.info(person.name);
    console.info(person);
  });
});
