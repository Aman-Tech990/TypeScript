// Inheritance
class Department {
    constructor(id, name) {
        this.id = id;
        this.id = id; // Read only (After this, cannot be assigned)
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department : (${this.id}, ${this.name})`);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInfo() {
        console.log("Number of employees: ", this.employees.length);
        console.log(this.employees);
    }
}
// const accounting = new Department('Accounting');
// accounting.describe();
// accounting.addEmployee("Ram");
// accounting.addEmployee("Hari");
// accounting.printEmployeeInfo();
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    viewRepoorts() {
        console.log("Total Reports : ", this.reports.length);
        console.log(this.reports);
    }
    // Override Property
    addEmployee(emp) {
        if (emp === "Aman") {
            return;
        }
        this.employees.push(emp);
    }
    get getReports() {
        if (this.reports.length > 0) {
            return this.reports;
        }
        throw new Error("Reports not found!");
    }
    set setReports(value) {
        if (!value) {
            throw new Error("Please pass valid value");
        }
        this.reports.push(value);
    }
}
const accDept = new AccountingDepartment("01", ["Data"]);
accDept.addReports("First");
accDept.addReports("Second");
// Getter & Setter
console.log(" Getter -> ", accDept.getReports);
accDept.setReports = "Error is encountered";
export {};
//# sourceMappingURL=classes.js.map