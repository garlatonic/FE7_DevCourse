// 함수에 타입을 지정하는 방법
// 함수의 매개변수와 반환값의 타입을 지정하는 방법
// function(n1: 매개변수 타입):반환값의 타입 {}
{
	function sum(n1: number, n2: number): number {
		return n1 + n2;
	}
	sum(10, 20);

	function concat(str1: string, str2: string): string {
		return str1 + str2;
	}
	concat("Hello", "Sucoding");
}
// 반환값을 지정하지 않아도 오류는 안 뜸 (타입추론)

{
	// 아무것도 반환하지 않는 함수? => void
	function printValue(value: string) {
		console.log(value);
		// return undefined
		// 아무것도 반환하지 않는다는 것은 undefined로 써도 되는데
		// ts에서 그런 함수를 위해서? void가 있음
		// void는 함수의 반환값이 없을 때만 사용
	}
	printValue("Helo");
}
// 절대로 값이 반환될 수 없는 상황에서 never을 사용
function throwError(msg: string): never {
	throw new Error(msg);
}
// void와 never의 차이?
// void는 return만 적으면 되는데 never는 코드로직상 절대 반환이 불가능
// 갱장히 특수한 타입입니다.

{
	// 함수 표현식
	// (1) - 함수 표현식의 타입을 지정하는 방법
	const sumA = function sum(n1: number, n2: number): number {
		return n1 + n2; // number
	};
	// (2) - 변수에다 함수 타입을 지정하는 방법
	const sumB: (n1: number, n2: number) => number = function sum(n1, n2) {
		return n1 + n2;
	};
	// (3) - 둘 다
	const sumC: (n1: number, n2: number) => number = function sum(
		n1: number,
		n2: number,
	): number {
		return n1 + n2; // number
	};
	// 웬만하면 1, 2 로 하는데 섞어쓰지말고 일관성있게!!!
}
{
	// 화살표함수
	// (1) - 함수 표현식의 타입을 지정하는 방법
	const sumA = (n1: number, n2: number): number => n1 + n2;
	// (2) - 변수에다 함수 타입을 지정하는 방법
	const sumB: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
	// (3) - 둘 다
	const sumC: (n1: number, n2: number) => number = (
		n1: number,
		n2: number,
	): number => n1 + n2;
}

// 매개변수를 하나만 전달하고 싶을 때? ?를 사용 (optional parameter) n2: number | undefined
function sum(n1: number, n2?: number): number {
	return n1 + (n2 || 0); // number
}
console.log(sum(2));
console.log(sum(2, 10));

// ||는 or인데 |는 머임?
// 03.ts로 ㄱㄱ

// 매개변수가 콜백함수일 때?
{
	// function log(msg: string) {
	// 	console.log(msg);
	// }
	function printValue(callback: (msg: string) => void): void {
		callback("hello");
	}
	// printValue(log);
	printValue((msg: string) => console.log(msg));

	// 반환값이 함수면은 반환값의 타입도 뒤에 지정해조야함
	function createMultiplier(factor: number): (num: number) => number {
		return (num) => num * factor;
	}

	const multiplyByTwo = createMultiplier(2);
	console.log(multiplyByTwo(5));
}

// 함수의 타입을 지정할 때는 매개변수와 반환값의 타입을 지정한다. !!!!!!!!!!!!!!!!!!!!!

{
	const createMultiplier: (factor: number) => (num: number) => number =
		(factor) => (num) => {
			return num * factor;
		};
	const multiplyByTwo = createMultiplier(2);
	console.log(multiplyByTwo(5));
}
{
	// 나머지 매개변수
	function sum(...numArr: number[]): number {
		return numArr.reduce((acc, cur) => acc + cur, 0);
	}
	sum(1, 2, 3, 4, 5);
}
{
	// 옵셔널 파라미터를 1번째에 지정? 불가
	// 할거면 전부 다 해야함
	function sum(n1?: number, n2?: number): number {
		return (n1 || 0) + (n2 || 0);
	}
}
{
	// 함수 오버로딩
	// 오버로드 시그니처를 활용해서 매개변수와 반환값의 경우의 수를 좁히는 방법
	function sum(a: string, b: string): string;
	function sum(a: string, b: number): string;
	function sum(a: number, b: string): string;
	function sum(a: number, b: number): number;
	function sum(a: number | string, b: number | string): number | string {
		if (typeof a === "number" && typeof b === "number") return a + b;
		else return `${a}${b}`;
	}

	const num = sum(10, 20);
	console.log(num.toFixed(2));
	const str = sum("A", 10);

	// 함수 오버로딩은 함수 표현식에서만 지원됨
	// 모든 경우의 수를 다 나열할 필요는 없음
	// 사용하는 케이스만 나열해도 괜찮음
}
