describe("Visibility", () => {
  it("should be visibility like public, protected, private", () => {
    class Counter {
      protected counter: number = 10;

      public get counterResult(): number {
        if (this.counter) {
          return this.counter;
        }
        return this.counter;
      }

      addCount(value: number): number {
        if (value) {
          return (this.counter += value);
        } else {
          return this.counter;
        }
      }

      subCount(value: number) {
        if (value) {
          this.counter = value;
        }
        this.counter = 0;
      }
    }

    class CounteSubTwo extends Counter {
      subCCount(value: number) {
        this.counter -= value;
      }
    }

    let counter: Counter = new Counter();
    counter.addCount(0);
    counter.addCount(100);
    counter.addCount(100);
    let counterSubTwo: CounteSubTwo = new CounteSubTwo();
    counterSubTwo.subCCount(30);
    console.info(counterSubTwo.counterResult);
    console.info(counter.counterResult);
  });

  it("should be parameter properties", () => {
    class Student {
      constructor(public name?: string) {}
    }

    let student: Student = new Student("Uray Syaziman");
    console.info(student);
  });
});
