/* 

타입 오퍼레이터
1. 유니언 타입 -> | (파이프), || (OR)
  A또는 B타입
2. 인터섹션 타입 ->  & (앰퍼센드), && (AND)
  A타입과 B타입

*/

{
	let x: number | string | boolean = 10;
	x = 20;
	x = "A";
	x = true;
	// number 아니면 string 아니면 boolean
	// 여러개의 타입 중 하나의 타입임을 명시할 때 쓰는 타입 오퍼레이터
	// 튜플일 때?
	const arr: (string | number)[] = ["A", 10];
	const arr2: [string, number] = ["A", 10];
	// 어떤 차이가 있고 어떤 장단점이 있을까
	// 변수의 타입을 포괄적으로 지정할 때는 유니온 타입이 참 편함
	// 그런데 만약 arr[0] 처럼 값을 뽑아와서 .toLowerCase() 이런걸 쓰려면?
	// 타입스크립트 컴파일러가 타입을 정확하게 추론할 수 없어 오류가 발생함
	// 명확하게 타입을 지정했을 경우엔 오류 XX
}

{
	// 타입 가드(type guard)
	// 런타입에 실제 검사 결과를 바탕으로 변수의 타입을 조금 더 좁게 추론하도록 타입스크립트에 힌트를 주는 문법
	const arr1: (string | number)[] = ["A", 10];
	const first = arr1[0];

	if (typeof first === "string") console.log(first.toLowerCase());
	// 보통 if로 타입가드를 써서 if=타입가드로 기억해도됨;;

	let x: number | string | boolean = 10;
	x.toFixed(20); // 참조자료형이 아니라면 기본자료형의 값을 바로? 판단해버림
  // 그래서 바로 Number의 메서드를 사용이 가능한것
}

// 인터섹션 타입은? 객체 타입에서 주로 사용
// 병합이 됨
const user: { name: string } & { age: number } = {
	name: "kim",
	age: 20,
};
// 이거랑 똑같은 내용
const user2: { name: string; age: number } = {
	name: "kim",
	age: 20,
};
