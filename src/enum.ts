export enum CategoryType {
  GOLD = "GOLD",
  SILVER = "SILVER",
  NOTHING = "NOTHING",
}

export type Product = {
  id: number;
  name: string;
  category: CategoryType;
};
