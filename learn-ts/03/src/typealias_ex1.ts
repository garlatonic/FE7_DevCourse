// 1
{
	type Person = { name: string; age: number };
	function getPersonInfo(person: Person): void {
		console.log(person);
	}
	getPersonInfo({
		name: "sanga",
		age: 29,
	});
}

// 2
{
	type Config = { host: string; port: number; ssl: boolean };

	const createConfig = (host: string, port: number, ssl: boolean): Config => {
		return { host, port, ssl };
	};

	const config = createConfig("localhost", 8080, true);
	console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

// 3
{
	type Rectangle = { width: number; height: number };
	const calculateArea = (rectangle: Rectangle): number =>
		rectangle.width * rectangle.height;
}
// 4
{
	type Student = {
		name: string;
		age: number;
		grades: number[];
	};

	function calculateAverageGrade(student: Student): number {
		return (
			student.grades.reduce((acc, cur) => acc + cur, 0) / student.grades.length
		);
	}

	calculateAverageGrade({
		name: "sanga",
		age: 29,
		grades: [50, 40, 50, 60],
	});
}
// 5
{
	type Response = { status: string; data: string; message: string };

	const createResponse: (
		status: string,
		data: string,
		message: string,
	) => Response = (status, data, message) => {
		return {
			status,
			data,
			message,
		};
	};

	console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}
// 6
{
	type Employee = { id: string; name: string; position: string };

	const getEmployeeInfo = (person: Employee): string => {
		return `${person.name} works as a ${person.position} with ID: ${person.id}`;
	};

	console.log(
		getEmployeeInfo({ id: "1", name: "james", position: "developer" }),
	); // "james works as a developer with ID: 1."
}
// 7
{
	type Circle = { radius: number };

	const calculateCircumference = (circle: Circle): number =>
		Math.PI * circle.radius * 2;

	console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}
// 8
{
	type Product = { name: string; price: number; inStock: boolean };

	const getDiscountedPrice = (product: Product, discount: number) => {
		if (product.inStock) return product.price * ((100 - discount) / 100);
		else return `this product is sold out`;
	};

	console.log(
		getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10),
	); // 900
}
// 9
{
	type Book = { title: string; author: string; publishedYear: number };
	function getBookSummary(book: Book): string {
		return `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
	}
	console.log(
		getBookSummary({ title: "river", author: "james", publishedYear: 2020 }),
	); // "river by james, published in 2020."
}
// 10
{
	type Transaction = { id: string; amount: number; timestamp: string };

	const isValidTransaction = (transaction: Transaction): boolean =>
		transaction.amount > 0;
}
