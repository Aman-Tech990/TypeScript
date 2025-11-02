class Department {
    private readonly id: string; // Only once can be assigned
    name: string;
    private employees: string[];
    constructor(name: string) {
        this.id = "d1"; // Read only (After this, cannot be assigned)
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log("Department = ", this.name);
    }
    addEmployee(emp: string) {
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
