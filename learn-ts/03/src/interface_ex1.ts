// 1
{
	interface Person {
		name: string;
		age: number;
	}

	const person: Person = {
		name: "sanga",
		age: 29,
	};
}
// 2
{
	interface Car {
		brand: string;
		model: string;
		start(): void;
	}

	const car: Car = {
		brand: "kia",
		model: "sorento",
		start() {
			return `Engine start`;
		},
	};
}
// 3
{
	interface Employee {
		name: string;
		position: string;
		department?: string;
	}

	const employee: Employee = {
		name: "sanga",
		position: "president",
		department: "hmm",
	};
}
// 4
{
	interface Team {
		name: string;
		members: string[];
	}

	const team3: Team = {
		name: "삼계탕",
		members: ["박상아", "정진환", "김준영", "김수연"],
	};
}
// 5
{
	interface Animal {
		name: string;
		age: number;
	}
	interface Dog extends Animal {
		breed: string;
	}
}
// 6
{
	interface Person {
		name: string;
		age: number;
		greet(): string;
	}

	const person: Person = {
		name: "sanga",
		age: 29,
		greet() {
			return `Hello, my name is ${this.name}`;
		},
	};
}
// 7
{
	interface Shape {
		area(): number;
	}
	interface Circle extends Shape {
		radius: number;
	}
	interface Rectangle extends Shape {
		width: number;
		height: number;
	}
}
// 8
{
	interface Person {
		name: string;
		age: number;
	}
	interface Address {
		street: string;
		city: string;
		zipcode: number;
	}
	interface Contact extends Person, Address {
		phone: number;
	}
}
// 9
{
	interface Dictionary {
		[key: string]: string;
	}
}
// 10
{
	interface Operation {
		(a: number, b: number): number;
	}

	const add: Operation = (a, b) => a + b;
	const subtract: Operation = (a, b) => a - b;
}
