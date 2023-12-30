import { Category, Product } from "../src/type-alias";

describe("type alias", function () {
  it("should be type alias", function () {
    let category: Category = {
      id: "satu",
      category: "Limited",
    };

    let product: Product = {
      id: 1,
      name: "Tas Polo",
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
