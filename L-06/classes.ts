// Abstract Classes

abstract class Department {
    name: String;
    protected employees: string[] = [];
    protected readonly id: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    abstract describe(this: Department): void;
    abstract displayName(): void;
}

class SubClass extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, "Accouting");
    }
    describe(): void {
        console.log("Department: ", this.id);
    }
    displayName(): void {
        console.log(this.name);
    }
}