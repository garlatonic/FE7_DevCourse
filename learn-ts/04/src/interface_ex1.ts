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
		start(this: Car, speed: number): void;
	}

	const car: Car = {
		brand: "kia",
		model: "sorento",
		start(this: Car, speed: number) {
			// 드물지만 this가 가리키는 대상을 명시적으로 표현하기 위해 작성하는 경우가 있음
			return `${this.brand} Start, speed: ${speed}km/h`;
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
		position: "developer",
		department: "IT",
	};
	const employee2: Employee = {
		name: "garlatonic",
		position: "manager",
	};
}
// 4
{
	interface Team {
		name: string;
		members: string[];
	}

	const team: Team = {
		name: "Development Team",
		members: ["kim", "ann", "park"],
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

	const dog: Dog = {
		name: "munji",
		age: 3,
		breed: "Golden Retriever",
	};
}
// 6
{
	interface Person {
		name: string;
		age: number;
		greet(): void;
	}

	const person: Person = {
		name: "sanga",
		age: 29,
		greet(this: Person) {
			console.log(`Hello, my name is ${this.name}`);
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

	const circle: Circle = {
		radius: 10,
		area(this: Circle) {
			return Math.PI * this.radius * this.radius;
		},
	};
	const rectangle: Rectangle = {
		width: 10,
		height: 10,
		area(this: Rectangle) {
			return this.width * this.height;
		},
	};
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
		name: string;
		caller: any;
		length: number;
		arguments: any[];
	}

	// 타입스크립트에서는 화살표함수에 arguments 지원해줌
	type Fn = (a: number, b: number) => number;

	const add: Fn = (a, b) => a + b;
	const subtract: Operation = (a, b) => a - b;
}
