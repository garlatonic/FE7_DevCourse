let num: number = 10;
// 터미널 입력값
// npx tsc src/main.ts
// 치면 main.js 생성됨

// npx tsc만 하면
// main.js를 좀더 최신 구문으로 바꿔줌

// 원래는 머라머라 뜨는데 나는 구버전이라서...
// module 에 esnext로 변경하고 하면은 와라락 생성이 됨

// 구버전 세팅값으로 하면 dist 어쩌구 막 뜨는데
// 강사님이 제공하신 세팅코드에서
//     "outDir": "./dist",
//   "include": ["src/**/*.ts"],
//   "exclude": ["node_modules"]
// 이거 다 주석처리하면 src에 불러와짐

console.log(num);

// 타입 붙이는 방법
// 변수:타입

/* 

기본 자료형
1. 문자열 -> string
2. 숫자 -> number
3. 논리 -> boolean
4. undefined -> undefined
5. null -> null
6. symbol -> symbol
7. Bigint -> bigint

*/
{
	const str: string = "Hello";
	const num: number = 10;
	const bool: boolean = true;
	const undf: undefined = undefined;
	const nul: null = null;
	const symb: symbol = Symbol("a");
	const bigI: bigint = 100n;

	console.log(typeof str); // string
	console.log(typeof num); // number
	console.log(typeof bool); // boolean
	console.log(typeof undf); // undefined
	console.log(typeof nul); // object  -> null의 타입은 object로 뜨지만 이것은 설계실수임 ts에서는 null이 맛다.
	console.log(typeof symb); // symbol
	console.log(typeof bigI); // bigint
}
{
	let str: string = "allo";
	str = "A";
	// str = 10;
	// str = true;
	// str = null;
	// 타입을 지정해놔서 이렇게 빨간줄로 막힘
}

/* 

참조 자료형
1. 배열 -> [], Array<>(제네릭)
2. 객체
3. 함수 -> 이건 나중에 자세히~

*/
{
	const arr1: number[] = [];
	arr1.push(10);

	// 튜플(tuple)
	// 다른 타입이 같이 있을 때
	const arr1_1: [number, string] = [1, "a"];

	const arr2: Array<number> = [];
	arr2.push(10);

	const matrix: [number[], string[]] = [
		[1, 2, 3],
		["ㅇㅁㄴㅇ", "ㄴㄴ"],
	];
	// 실무에서는 잘 활용하지 않는 방법
	const matrix2: Array<Array<number>> = [
		[1, 2, 3],
		[2, 3, 4],
	];

	const blocks1: string[][][] = [
		[["a", "b"], ["c"]],
		[["a", "b"], ["c"]],
	];
	const blocks2: [[string[], number[]], [string[], number[]]] = [
		[["a", "b"], [1]],
		[["a", "b"], [1]],
	];
}
{
	const object: {} = {}; // Record<string, never>
	const user: {
		// 순서는 바꿔도 되는데, 굳이 바꾸지 않는 것이 좋음
		name: string;
		age: number;
		favorite: string[];
		address: {
			zipcode: number;
			details: [string, string, number];
		};
	} = {
		name: "park",
		age: 29,
		favorite: ["bread", "coffee"],
		address: {
			zipcode: 231232,
			details: ["인천", "부평구", 213],
		},
	};

	const members: { id: number; name: string }[] = [
		{ id: 1, name: "park" },
		{ id: 2, name: "kim" },
	];
}
