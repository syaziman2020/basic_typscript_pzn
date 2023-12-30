export namespace MathUtil {
  export function sumOfArray(...numbers: number[]): number {
    let total = 0;
    for (let index in numbers) {
      total += numbers[index];
    }
    return total;
  }

  export const PI: number = 3.14;

  export type Booking = {
    id: number;
    name: string;
  };
}
