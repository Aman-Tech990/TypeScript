class Department {
    constructor(name) {
        this.id = "d1"; // Read only (After this, cannot be assigned)
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log("Department = ", this.name);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInfo() {
        console.log("Number of employees: ", this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee("Ram");
accounting.addEmployee("Hari");
accounting.printEmployeeInfo();
export {};
//# sourceMappingURL=classes.js.map