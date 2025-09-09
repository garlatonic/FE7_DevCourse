{
	// 구조적 타이핑
	// 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식
	const point: { x: number; y: number } = { x: 10, y: 20 };
	const position: { x: number; y: number } = point;

	const fn1: (a: number, b: number) => number = (a, b) => a + b;
	const fn2: (x: number, y: number) => number = fn1;
}
{
	// readonly
	const user: {
		readonly name: string;
		readonly age?: number;
	} = {
		name: "park",
	};

	// user.name = "수정불가";
	// readonly로 타입을 선언해놓으면은 읽기만 가능하고 수정이 불가능함.
	// tuple도 사용 가넝
	const tuple: readonly [number, string] = [10, "A"];

	// readonly에도 옵셔널 파라미터 사용이 가능함
	// 이미 지정이 되어있어도, undefined여도 못 바꿈
}
{
	// 인덱스 시그니처
	// 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법
	const user: {
		// [key: string]: string; // 키가 문자열이고 값이 문자열이면 무한확장가능
		// 숫자도 넣고시퍼??
		[key: string]:
			| string
			| number
			| ({ address: string } & { zipcode: string });
	} = { name: "kim" };

	user.gender = "male";
	user.address = "seoul";
	// 이렇게 스무스하게 추가가 가능

	// 인덱스 시그니처의 단점?
	// 굉장히 포괄적인 문법이라 정확한 타입추론이 불가
}
{
	// 함수 -> 일급 객체라서 이렇게 짤 수도 있깈함
	const add: {
		(a: number, b: number): number;
	} = (a, b) => a + b;
	//. 그런데? 굳이?

  // 보통 이런식으로 작성
	const add2: (a: number, b: number) => number = (a, b) => a + b;
}
