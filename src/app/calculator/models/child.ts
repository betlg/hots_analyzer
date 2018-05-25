export class Child {
    age: number;
    constructor(age: number) {
        this.age = age;
    }

    benefit() {
        return (this.age > 5 && this.age <= 18) ? 10 : 0;
    }
}
