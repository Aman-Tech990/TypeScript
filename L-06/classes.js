// Abstract Classes
class Department {
    constructor(id, name) {
        this.employees = [];
        this.id = id;
        this.name = name;
    }
}
class SubClass extends Department {
    constructor(id, reports) {
        super(id, "Accouting");
        this.reports = reports;
    }
    describe() {
        console.log("Department: ", this.id);
    }
    displayName() {
        console.log(this.name);
    }
}
export {};
//# sourceMappingURL=classes.js.map