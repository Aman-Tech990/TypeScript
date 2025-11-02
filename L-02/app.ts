// Object, Array, Tuple, Enum
console.log("---------Objects & Arrays--------");

const person: {
    name: string;
    age: number,
    toy: {
        name: string;
        price: number;
    };
    skills: string[];
} = {
    name: "Aman",
    age: 19,
    toy: {
        name: "Truck",
        price: 199
    },
    skills: ["React.js", "Node.js"]
}

console.log(person);

