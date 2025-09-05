let employee: {
	id: number;
	name: string;
	contact: {
		email: string;
		phone: string;
	};
	department: string;
} = {
	id: 123,
	name: "John Doe",
	contact: {
		email: "john.doe@example.com",
		phone: "123-456-7890",
	},
	department: "Engineering",
};
let students: { name: string; age: number; grade: string }[] = [
	{ name: "Alice", age: 22, grade: "A" },
	{ name: "Bob", age: 24, grade: "B" },
	{ name: "Charlie", age: 21, grade: "C" },
];
let numbers: number[] = [10, 20, 30, 40, 50];
let users: { name: string; age: number; active: boolean }[] = [
	{ name: "Alice", age: 30, active: true },
	{ name: "Bob", age: 25, active: false },
	{ name: "Charlie", age: 35, active: true },
];
let nestedArray: [string[], number[], string[]] = [
	["apple", "banana"],
	[1, 2, 3],
	["cherry"],
];
let words: string[] = ["apple", "banana", "cherry", "kiwi"];
let items: [
	{ id: number; name: string; price: number },
	{ id: number; name: string; price: number },
	[string, number],
] = [
	{ id: 1, name: "Item1", price: 100 },
	{ id: 2, name: "Item2", price: 200 },
	["discount", 10],
];
let profile: {
	user: { name: string; age: number };
	preferences: string[];
	isActive: boolean;
} = {
	user: { name: "John", age: 30 },
	preferences: ["coding", "reading", "travelling"],
	isActive: true,
};
let mixedData: [string, number, boolean, string, number] = [
	"apple",
	10,
	true,
	"banana",
	20,
];
let company: {
	name: string;
	address: {
		street: string;
		city: string;
		country: string;
	};
} = {
	name: "Tech Corp",
	address: {
		street: "123 Main St",
		city: "Tech City",
		country: "Techland",
	},
};

console.log(employee);
console.log(students);
console.log(numbers);
console.log(users);
console.log(nestedArray);
console.log(words);
console.log(items);
console.log(profile);
console.log(mixedData);
console.log(company);