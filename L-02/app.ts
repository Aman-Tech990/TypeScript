// Object, Array, Tuple, Enum
console.log("---------ENUM--------");

enum Role { ADMIN, AUTHOR, READ_ONLY_USER };

const person: {
    name: string;
    age: number,
    toy: {
        name: string;
        price: number;
    };
    product: [number, string]; // Fixed Length Tuple
    role: Role
} = {
    name: "Aman",
    age: 19,
    toy: {
        name: "Truck",
        price: 199
    },
    product: [10, "Dell"],
    // role: Role.READ_ONLY_USER,
    role: Role.READ_ONLY_USER,
}

console.log(person);

