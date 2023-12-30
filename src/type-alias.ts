export type Category = {
  id: number | string;
  category: string;
};

export type Product = {
  id: number;
  name: string;
  price?: number;
  category: Category;
};
