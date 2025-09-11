// 제네릭
// 제네릭은 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
// 코드의 재사용성을 높이고, 다양한 타입에 대해 하나의 함수나 클래스를 작성할 수 있게 도와줍니다.

// T = Type의 약자. T라고 적는 관례가 있음. 가장 일반적인 타입 변수
// K = Key의 약자. 객체의 Key를 제네릭으로 처리할 때 사용
// V = Value의 약자. 객체의 Value를 제네릭으로 처리할 때 사용
// E = Element의 약자. 배열의 요소나 이벤트를 제네릭으로 처리할 때 사용
// U = Another Type. T 이외의 타입을 넣기
{
	// 제네릭을 쓸 때 오버로드 시그니처를 써도 되긴 하는데, 충돌이 날 수도 있어 권장하는 패턴이 아님
	function getFirstElement<T>(arr: T[]): T | undefined {
		// 널 아님 보장 연산자(!)
		// 혹은 뒤에 undefined를 유니언으로 붙여주면 됨
		return arr[0]!;
	}
	console.log(getFirstElement<number>([1, 2, 3]));
	console.log(getFirstElement<string>(["a", "b", "c"]));
	console.log(getFirstElement<boolean>([true, false]));
	console.log(getFirstElement<boolean | string>([true, "1"]));
}
{
	function identity<T>(value: T): T {
		return value;
	}

	// 제네릭도 타입 추론이 됨
	// 굳이 꺾쇠 부분이 없어도 타입추론이 잘 됨
	const num = identity(42); // number
	// function identity<42>(value: 42): 42 이렇게 ㅎㅎ
	const str = identity("a"); // string
	const numArr = identity([1, 2, 3]);
	const strArr = identity(["ㅂ", "ㅈ", "ㄷ", "ㄱ"]);

	// 타입 명시가 필요하지 않으면, 타입 추론을 활용하는 것을 권장
}
{
	function logArray<T>(arr: T[]): void {
		arr.forEach((value) => console.log(value));
	}

	logArray([1, 2, 3]); // function logArray<number>(arr: number[]): void
	logArray(["a", "b", "c"]); // function logArray<string>(arr: string[]): void
}
{
	// 매개변수의 값에 따라 제네릭 무한생성 가능
	function mergeObject<T, U>(obj1: T, obj2: U): T & U {
		return { ...obj1, ...obj2 };
	}

	const merge1 = mergeObject({ name: "sanga" }, { age: 29 });
	const merge2 = mergeObject(
		{ name: "sanga", age: 29 },
		{ gender: "female", name: "sanga park" },
	);
}
{
	// 타입 제약
	// 제네릭의 타입을 제한하는 문법
	// T extends 제약
	// 쓰게 되면 반환값을 제대로 정해줘야함
	function sumArray<T extends number>(arr: T[]): number {
		return arr.reduce((acc, cur) => acc + cur, 0);
	}
}
{
	function returnLength<T extends { length: number }>(arr: T[]): number {
		return arr.length;
	}
	returnLength(["a", "b", "c"]);
}
{
	function logKey<T extends { name: string; age: number }>(person: T): void {
		console.log(`${person.name}, ${person.age}`);
	}
	logKey({ name: "sanga", age: 29 }); // name, age 속성이 포함이 들어있을 경우에만 들어올 수 이씀
}
// 인터페이스에서 제네릭
{
	interface Box<T extends string | boolean> {
		value: T;
		getValue(): T;
	}
	const stringBox: Box<string> = {
		value: "kim",
		getValue() {
			return this.value;
		},
	};
	const booleanBox: Box<boolean> = {
		value: true,
		getValue() {
			return this.value;
		},
	};
}
// 클래스에서 제네릭
{
	class Box<T extends { id: number }> {
		private items: T[] = [];
		add(item: T) {
			this.items.push(item);
		}
	}
	const stringBox = new Box<{ id: number; name: string }>();
	stringBox.add({ id: 1, name: "park" });
}
