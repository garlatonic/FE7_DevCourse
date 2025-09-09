// 1
{
	interface Animal {
		name: string;
		speak(): string;
	}
	interface Dog extends Animal {
		speak(): "Woof!";
	}
	interface Cat extends Animal {
		speak(): "Meow!";
	}
}
// 2
{
	interface Employee {
		name: string;
		age: number;
		position?: string;
	}
	interface Company {
		name: string;
		location: string;
		employee: Employee;
	}
}
// 3
{
	interface Logger {
		log(message: string): void;
		history: string[];
	}

	const logger: Logger = {
		log(message) {
			this.history.push(message);
		},
		history: [],
	};

	logger.log("App started");
	logger.log("User logged in");
	console.log(logger.history); // ["App started", "User logged in"]
}
// 4
{
	interface Success {
		status: "success";
		data: string;
	}
	interface Error {
		status: "error";
		error: string;
	}
	type Response = Success | Error;
	const handleResponse = (response: Response): string => {
		if (response.status === "success") return `Success: ${response.data}`;
		else return `Error: ${response.error}`;
	};
}
// 5
{
	interface Author {
		name: string;
		birthYear: number;
	}
	interface Book {
		title: string;
		publishedYear: number;
		author: Author;
	}
}
// 6
{
	interface Employee {
		name: string;
	}
	interface Manager extends Employee {
		team: string[];
	}
	interface Developer extends Employee {
		language: string;
	}

	const manager: Manager = {
		name: "박상아",
		team: ["박상아", "정진환", "김준영", "김수연"],
	};
	const developer: Developer = {
		name: "박상아",
		language: "javascript",
	};
}
// 7
{
	interface Database {
		[key: string]: string[];
	}

	const db: Database = {
		users: ["Alice", "Bob", "Charlie"],
		orders: ["order1", "order2"],
	};

	console.log(db.users); // ["Alice", "Bob", "Charlie"]
	console.log(db.orders); // ["order1", "order2"]
}
// 8
{
	interface User {
		name: string;
		isAdmin: boolean;
		adminCode?: string;
	}

	function createUser(name: string, isAdmin: boolean): User {
		if (isAdmin) return { name, isAdmin, adminCode: "admin" };
		return { name, isAdmin };
	}

	const admin = createUser("Alice", true);
	const user = createUser("Bob", false);

	console.log(admin); // { name: "Alice", isAdmin: true, adminCode: "admin123" }
	console.log(user); // { name: "Bob", isAdmin: false }
}
// 9
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
		radius: 2,
		area() {
			return Math.PI * this.radius * this.radius;
		},
	};

	const rectangle: Rectangle = {
		width: 2,
		height: 2,
		area() {
			return this.width * this.height;
		},
	};

	console.log(circle.area());
	console.log(rectangle.area());
}
// 10
{
	// 인터페이스를 작성하세요
	interface Vehicle {
		brand: string;
		model: string;
	}
	interface Electric {
		batteryLife: number;
	}
	interface ElectricCar extends Vehicle, Electric {
		charge(): void;
	}

	const tesla: ElectricCar = {
		// 코드를 작성하세요
		brand: "tesla",
		model: "잘모름",
		batteryLife: 100,
		charge() {
			console.log("Charging the car...");
		},
	};

	tesla.charge(); // "Charging the car..."
}
