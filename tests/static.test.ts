describe("Static", () => {
  it("should be static properties", () => {
    class Helper {
      static NAME: string = "Uray Syaziman";
      static ID: number = 1.0;
      static ADDRESS: string = "Sepakat 2";
    }

    console.info(Helper.NAME);
    console.info(Helper.ID);
    console.info(Helper.ADDRESS);
  });
});
