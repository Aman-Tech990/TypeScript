class Department {
    constructor(name) {
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
};
console.log(accountingCopy.describe());
export {};
//# sourceMappingURL=classes.js.map