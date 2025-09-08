{
	// 타입을 지정 안했는데 왜 오류가 발생하지 않는가?
	const str = "Hello";
	const num = 10;
	const bool = true;
	const undf = undefined;
	const nul = null;
	const symb = Symbol("a");
	const bigI = 100n;
}
{
	//  let도 동일
	let str = "Hello";
	str = 10; // 문자열이 아닌 타입을 할당하려고 하면 오류가 발생함
	str = "A";

	let num = 10;
	let bool = true;
	let undf = undefined;
	let nul = null;
	let symb = Symbol("a");
	let bigI = 100n;
}

// 타입추론
// 타입을 명시하지 않아도 컴파일러가 값, 문맥, 흐름을 보고 적절한 타입을 자동으로 결정하는 기능
// 기본자료형 -> 타입 추론
// 참조자료형 -> 타입 명시
// 어떠한 것도 할당할 수 있는 any 타입
let a; // let a: any

// 최대한 타입추론을 활용할 수 있다면 활용하고 못하면 명시할것
// 일관성있게 쓸거면 계속 쓰기
// 난 아마 써야할듯 ...

{
	const str = "hello"; // const str: "hello"
	// 타입추론이 이렇게 됨 ㄷㄷ
	// 만약 타입추론을 사용한다면 let으로?
}

// 타입을 지정해줄 때 타입이 아닌 값으로 지정하면 값이 아닌건 재할당이 불가능함
// 값으로 타입을 지정하는 방식? -> 리터럴 타입 (literal type)
// 정확히 그 값 하나만 가질 수 있는 타입
// 리터럴 타입으로 쓰면? 메모리를 덜 잡아먹음

{
	// 근데? 참조자료형은 const도 범용적인 타입으로 추론이 됨
	const obj = {
		name: "park",
		age: 29,
	};
}
{
	const json = {
		userId: 10,
		id: 100,
		title: "at nam consequatur ea labore ea harum",
		body:
			"cupiditate quo est a modi nesciunt soluta\n" +
			"ipsa voluptas error itaque dicta in\n" +
			"autem qui minus magnam et distinctio eum\n" +
			"accusamus ratione error aut",
	};
	// 입력값을 받아서 타입추론으로 가져와서 쓰기

	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => response.json())
		.then(
			(json: { userId: number; id: number; title: string; body: string }[]) => {
				// console.log(json)
				console.log(json[1]?.userId);
				// 점 찍으면 바로 그냥 나오기가 가능;;
				// 그런데 배열일 때는? 안뜨네...
				// 직접 인덱스 지정해주고 점 찍으면 나온당
			},
		);
}
