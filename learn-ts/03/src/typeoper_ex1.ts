// 1
{
	const printValue = function (value: string | number): void {
		console.log(value);
	};

	printValue("Hello"); // "Hello" 출력
	printValue(42); // 42 출력
}
// 2
{
	const doubleOrLength = function (value: string | number): number {
		if (typeof value === "string") return value.length * 2;
		if (typeof value === "number") return value * 2;
		throw new Error("Invaild Types");
	};

	console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
	console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}
// 3
{
	const mergeObjects = function (
		person: {
			name: string;
			age: number;
		},
		employee: {
			jobTitle: string;
			salary: number;
		},
	): {
		name: string;
		age: number;
	} & {
		jobTitle: string;
		salary: number;
	} {
		return { ...person, ...employee };
	};

	const person = { name: "Alice", age: 30 };
	const employee = { jobTitle: "Engineer", salary: 5000 };

	const mergedObject = mergeObjects(person, employee);
	console.log(mergedObject);
	// 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}
// 4
{
	const getFirstElement = (
		arr: number[] | string[],
	): number | string | undefined => {
		return arr[0];
	};

	console.log(getFirstElement([1, 2, 3])); // 1
	console.log(getFirstElement(["a", "b", "c"])); // "a"
	console.log(getFirstElement([])); // undefined
}
// 5
{
	const isEqual = (v1: number | string, v2: number | string): boolean => {
		return v1 === v2;
	};

	console.log(isEqual(10, 10)); // true
	console.log(isEqual("hello", "world")); // false
	console.log(isEqual(5, "5")); // false
}
// 6
{
	const updateAddress = function (
		person: { name: string; age: number },
		address?: string,
	): { name: string; age: number; address?: string } {
		if (address) return { ...person, address };
		return person;
	};

	const updatedPerson = updateAddress(
		{ name: "Jane", age: 28 },
		"123 Maple St",
	);
	console.log(updatedPerson);
	// 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

	const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
	console.log(updatedPersonWithoutAddress);
	// 예상 출력: { name: "John", age: 22 }
}
// 7
{
	const maxValue = function (
		v1: number | string,
		v2: number | string,
	): number | string {
		if (typeof v1 === "number" && typeof v2 === "number")
			return Math.max(v1, v2);
		if (typeof v1 === "string" && typeof v2 === "string")
			return v1.length > v2.length ? v1 : v2;
		throw new Error("Invalid Types");
	};

	console.log(maxValue(10, 20)); // 20
	console.log(maxValue("apple", "banana")); // "banana"
	console.log(maxValue(30, 30)); // 30
	console.log(maxValue("cat", "dog")); // "dog"
}
// 8
{
	// 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
	function getValue(value: number): string;
	function getValue(value: string): string;
	function getValue(value: number | string): string {
		return `${value}`;
	}

	console.log(getValue(123)); // "123"
	console.log(getValue("abc")); // "abc"
}
// 9
{
	const createContact = function (
		person: {
			name: string;
			age: number;
		},
		contact: {
			email: string;
		},
	): { name: string; age: number; email: string } {
		return { ...person, ...contact };
	};

	const person = { name: "Alice", age: 28 };
	const contact = { email: "alice@example.com" };

	const personWithContact = createContact(person, contact);
	console.log(personWithContact);
	// 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}
// 10
{
	const getAge = function (age: number | string): number {
		if (typeof age === "string") return Number(age);
		else return age;
	};

	console.log(getAge("25")); // 25
	console.log(getAge(30)); // 30
	console.log(getAge("abc")); // NaN
}
