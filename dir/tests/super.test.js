"use strict";
describe("Super", () => {
    it("should be support super in the class", () => {
        class Person {
            constructor(name) {
                this.name = name;
            }
        }
        class Mahasiswa extends Person {
            constructor(name, nip) {
                super(name);
                this.nip = nip;
            }
        }
        let mhs = new Mahasiswa("Uray", 12345);
        console.info(mhs);
    });
    it("should be overriding", () => {
        class Dosen {
            constructor(name) {
                this.name = name;
            }
            sayHai() {
                console.info(`hello your lecture is ${this.name}`);
            }
        }
        class Pembimbing extends Dosen {
            constructor(name, nameMhs) {
                super(name);
                this.nameMhs = nameMhs;
            }
            sayHai() {
                super.sayHai();
                console.info(`Hello, your lecture is ${this.name}, and the student is ${this.nameMhs}`);
            }
        }
        let pembimbing = new Pembimbing("Pak Reza", "Uray");
        let dosen = new Dosen("Pak Jon");
        pembimbing.sayHai();
        // dosen.sayHai();
    });
});
