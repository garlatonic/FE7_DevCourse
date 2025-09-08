// 1
{
	// 함수 정의
	const add = function (a: number, b: number): number {
		return a + b;
	};

	// 함수 호출
	const result = add(10, 5);
	console.log(result); // 15
}
// 2
{
	// 함수 정의
	const greet = (name: string): string => `Hello, ${name}`;

	// 함수 호출
	const greeting = greet("Alice");
	console.log(greeting); // "Hello, Alice!"
}
// 3
{
	// 함수 정의
	function sumAll(...nums: number[]): number {
		return nums.reduce((a, c) => a + c, 0);
	}

	// 함수 호출
	const total = sumAll(1, 2, 3, 4);
	console.log(total); // 10
}
// 4
{
	// 함수 정의
	// 기본값을 넣을 경우 자동으로 타입이 완성됨
	// 타입을 넣어도 되고 안넣어도 되는데 안넣는게 좀더 깔꼼
	// const sum = function (a: number, b = 0): number {
	// 	return a + b;
	// };
	const sum: (a: number, b?: number) => number = (a, b = 0) => a + b;

	// 함수 호출
	const result = sum(5);
	console.log(result); // 5
}
// 5
{
	// 함수 정의
	const multiply = (a: number, b: number): number => a * b;

	// 함수 호출
	const product = multiply(4, 5);
	console.log(product); // 20
}
// 6
{
	// 함수 정의
	// function concatStringAndNumber(str: string, num: number): string {
	// 	return str + num;
	// }
	const concatStringAndNumber: (str: string, num: number) => string = (
		str,
		num,
	) => str + num;

	// 함수 호출
	const result = concatStringAndNumber("Hello", 10);
	console.log(result); // "Hello10"
}
// 7
{
	// 함수 정의
	const greet = function (a: string, b = "Welcome"): string {
		return `${b}, ${a}`;
	};

	// 함수 호출
	const greeting1 = greet("Alice", "Hello");
	const greeting2 = greet("Bob");
	console.log(greeting1); // "Hello, Alice!"
	console.log(greeting2); // "Welcome, Bob!"
}
// 8
{
	// 함수 정의
	const findMax = (arr: number[]): number => Math.max(...arr);

	// 함수 호출
	const max = findMax([10, 20, 30, 40]);
	console.log(max); // 40
}
// 9
{
	// 함수 정의
	const double = (num: number): number => num * 2;

	// 함수 호출
	const doubled = double(10);
	console.log(doubled); // 20
}
// 10
{
	// 함수 정의
	function getInfo(param: number): string;
	function getInfo(param: string): string;
	function getInfo(param: number | string): string {
		return `Name: ${param}`;
	}

	// 함수 호출
	const info1 = getInfo("Alice");
	const info2 = getInfo(30);
	console.log(info1);
	console.log(info2);
}
