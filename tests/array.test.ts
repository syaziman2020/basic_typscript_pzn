describe("Array", function () {
  it("should same with js but different syntax", function () {
    let name: string = "Uray Syaziman";
    let status: boolean = true;
    let age: number = 22;

    console.info(name);
    console.info(status);
    console.info(age);
  });

  it("should same with js array", function () {
    let names: string[] = ["ziman", "uray", "sasya"];
    let ages: Array<number> = [10, 20, 25];

    console.info(names);
    console.info(ages);
  });

  it("should be read only for this array and tuple", function () {
    let hobbies: ReadonlyArray<string> = ["bucin", "swimming", "eating"];
    console.info(hobbies);

    //tuple sudah ditentukan tipe datanya setiap index
    let styles: readonly [string, number, boolean] = ["using css", 10, true];
    console.info(styles);
  });
});
