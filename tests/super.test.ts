describe("Super", () => {
  it("should be support super in the class", () => {
    class Person {
      name?: string;
      constructor(name: string) {
        this.name = name;
      }
    }

    class Mahasiswa extends Person {
      nip: number;
      constructor(name: string, nip: number) {
        super(name);
        this.nip = nip;
      }
    }

    let mhs: Mahasiswa = new Mahasiswa("Uray", 12345);

    console.info(mhs);
  });

  it("should be overriding", () => {
    class Dosen {
      name: string;
      constructor(name: string) {
        this.name = name;
      }

      sayHai(): void {
        console.info(`hello your lecture is ${this.name}`);
      }
    }

    class Pembimbing extends Dosen {
      nameMhs: string;
      constructor(name: string, nameMhs: string) {
        super(name);
        this.nameMhs = nameMhs;
      }

      sayHai(): void {
        super.sayHai();
        console.info(`Hello, your lecture is ${this.name}, and the student is ${this.nameMhs}`);
      }
    }

    let pembimbing: Pembimbing = new Pembimbing("Pak Reza", "Uray");
    let dosen: Dosen = new Dosen("Pak Jon");
    pembimbing.sayHai();
    // dosen.sayHai();
  });
});
