// 타입별칭 (type alias)
// 나만의 커스텀 타입을 만들 수 있는 방법을 제공
// 장점? 가독성과 유지보수가 좋아지고 코드 확장성도?

// 타입별칭은 첫글자를 대문자로 지정하는 관례가 있음
type Person = {
	name: string;
	age: number;
	gender: string;
};

const user: Person = {
	name: "sanga",
	age: 29,
	gender: "female",
};
{
	// 1. 기본 타입 별칭
	type ID = string | number;
	const userId: ID = "student-96";
	const productId: ID = 2;
}
{
	// 2. 객체 타입 별칭
	// 객체 타입 별칭이기 때문에 readonly, 옵셔널 프로퍼티, 인덱스 시그니처 가능
	type User = {
		name: string;
		age: number;
	};
	type Person = {
		[key: string]: string | number;
	};
	const sanga: User = {
		name: "sanga",
		age: 29,
	};
}
{
	// 3. 함수 타입 별칭
	type Calculate = (a: number, b: number) => number;
	type Calculate2 = { (a: number, b: number): number };

	const add: Calculate = (a, b) => a + b;
}
{
	// 4. 튜플 타입 별칭
	type Point = [number, boolean];
	const point: Point = [10, true];
}
{
	// 5. 인터섹션(유니온) 타입 별칭(타입확장)
	// 유니온 타입, 인터섹션 타입
	type StringID = string;
	type NumberID = number;
	type ID = StringID | NumberID;
	// 타입별칭을 지정할 때 다른 타입별칭을 재료?로 쓸 수 있음
	// 이렇게 사용한다면 유지보수가 좋아짐

	type NameAble = {
		name: string;
	};
	type AgeAble = {
		age: number;
	};
	type Able = NameAble & AgeAble;
}
{
	// 6. 리터럴 타입 별칭
	type Direction = "NORTH" | "SOUTH" | "EAST" | "WEST";
	const direction: Direction = "EAST"; // 예시로 쫙 뜸
}
// 타입스크립트는 컴파일 언어라서 흩어져있는 파일 안에서 같은 이름이 여러개라면 에러가 남
// 타입은 고유해야함
