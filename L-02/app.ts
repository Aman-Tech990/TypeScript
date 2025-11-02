// Object, Array, Tuple, Enum
console.log("---------Tuples--------");

const person: {
    name: string;
    age: number,
    toy: {
        name: string;
        price: number;
    };
    product: [number, string]; // Fixed Length Tuple
} = {
    name: "Aman",
    age: 19,
    toy: {
        name: "Truck",
        price: 199
    },
    product: [10, "Dell"],
}

console.log(person);

