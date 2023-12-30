describe("union type", function () {
  it("should be union type", function () {
    let value: string | number = "hello world";
    console.info(value);

    value = 100;
    console.info(value);
  });

  it("should be check function union type", function () {
    function getValue(newValue: string | number | boolean) {
      if (typeof newValue === "string") {
        return newValue.toUpperCase();
      } else if (typeof newValue === "number") {
        return newValue * 10;
      } else {
        return !newValue;
      }
    }

    console.info(getValue("hello world"));
    console.info(getValue(10));
  });
});
