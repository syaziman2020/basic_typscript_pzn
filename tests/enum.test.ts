import { CategoryType, Product } from "../src/enum";

describe("enum", function () {
  it("should be different compile on js but work", function () {
    let product: Product = {
      id: 2,
      name: "Pakaian",
      category: CategoryType.GOLD,
    };

    console.info(product);
  });
});
