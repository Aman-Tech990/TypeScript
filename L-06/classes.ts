class Department {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    describe() {
        console.log("Department = ", this.name);
    }
}

const accounting = new Department('Accounting');
accounting.describe();

const accountingCopy = {
    // name: "Aman",
    describe: accounting.describe
}
console.log(accountingCopy.describe());
