// 1
{
	// 함수 정의
	const sumAllNumbers = function (...arr: number[][]): number[] {
		return arr.map((ele) => ele.reduce((a, b) => a + b, 0));
	};

	// 함수 호출
	const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
	console.log(result); // [3, 12, 13]
}
// 2
{
	// 함수 정의
	const doubleValue = function (value: number | string): number | string {
		if (typeof value === "number") return value * 2;
		else return value.length * 2; // 문제를 잘못 이해함 ㄷㄷ
	};

	// 함수 호출
	const result1 = doubleValue(5);
	const result2 = doubleValue("hello");
	console.log(result1); // 10
	console.log(result2); // 10
}
// 3
{
	// 함수 정의
	const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
		// if (arr1.length <= arr2.length)
		// 	return arr1.map((v, i) => v * (arr2[i] || 0));
		// else return arr2.map((v, i) => v * (arr1[i] || 0));
		const minLength = Math.min(arr1.length, arr2.length);
		return Array.from({ length: minLength }, (_, index) => {
			const a = arr1[index];
			const b = arr2[index];
			if (a !== undefined && b !== undefined) return a * b;
			return 0;
		});
	};

	// 함수 호출
	const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
	console.log(result); // [4, 10, 18]

	const result2 = multiplyArrays([1, 2], [4, 5, 6]);
	console.log(result2); // [4, 10]
}
// 4
{
	// 함수 정의
	const intersection = function (arr1: number[], arr2: number[]): number[] {
		// const result: number[] = [];
		// arr1.map((el) => {
		// 	arr2.includes(el) && result.push(el);
		// });
		// return result;
		return arr1.filter((num) => arr2.includes(num));
	};

	// 함수 호출
	const result = intersection([1, 2, 3], [2, 3, 4]);
	console.log(result); // [2, 3]
}
// 5
{
	// 함수 정의
	const formatInfo = function (person: {
		name?: string;
		age?: number;
	}): string {
		if (person.name) return `Name: ${person.name}`;
		else return `Age: ${person.age}`;
	};

	// 함수 호출
	const info = formatInfo({ name: "Alice" });
	console.log(info); // "Name: Alice"
}
// 6
{
	// 함수 정의
	const combineStrings = function (str1: string, str2: string): string {
		// return str1 + str2;
		return `${str1}${str2}`
	};

	// 함수 호출
	const combined = combineStrings("Hello", "World");
	console.log(combined); // "HelloWorld"
}
// 7
{
	// 함수 정의
	const squareArray = (arr: number[]): number[] => arr.map((el) => el ** 2);

	// 함수 호출
	const result = squareArray([1, 2, 3, 4]);
	console.log(result); // [1, 4, 9, 16]
}
// 8
{
	// 함수 정의
	function addStringAndNumber(str: string, num: number): string {
		return `${str}${num}`;
	}

	// 함수 호출
	const result = addStringAndNumber("The number is ", 10);
	console.log(result); // "The number is 10"
}
// 9
{
	// 함수 정의
	const compareValues = (num: number, str: string): string =>
		num > str.length ? "Number is larger" : "String is larger";

	// 함수 호출
	const result = compareValues(10, "Hello");
	console.log(result); // "Number is larger"
}
// 10
{
	// 함수 정의
	const checkValue = function (value: number | string | boolean): string {
		if (typeof value === "number") return "It's a number";
		else if (typeof value === "string") return "It's a string";
		else return "It's a boolean";
	};

	// 함수 호출
	const result = checkValue(true);
	console.log(result);
}
