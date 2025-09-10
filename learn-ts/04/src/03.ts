// 인덱스 접근 타입
// 객체 타입에서 특정 키를 사용해 그 키의 값 타입을 추출하는 문법
// 런타임에서 객체의 속성으로 값을 꺼내듯이, 타입차원에서 타입속성으로 값의 타입을 꺼내는것
{
	type Person = {
		name: string;
		age: number;
	};

	const person: Person = {
		name: "psa",
		age: 29,
	};

	type NameType = Person["name"];
	type AgeType = Person["age"];

	type NameAndAge = Person["name" | "age"];
}
{
	// const 단언
	// 값 -> 리터럴
	// 객체 속성의 값 -> readonly

	let x = "hello" as const; // 리터럴 타입으로 바낌
	const numArr = [1, 2, 3] as const; // readonly로 됨
	const obj = {
		name: "saga",
		age: 20,
	} as const; // 속성값을 readonly로 바꾸고 리터럴로도 바꿈
}
{
	enum Status {
		PENDING = "PENDING",
		SUCCESS = "SUCCESS",
		FAILED = "FAILED",
	}

	const options = Object.values(Status).map((value) => ({
		label: value,
		value,
	}));
	console.log(options);

	// const enum이 성능이 좋다는걸 알아도
	// enum이 ui작업이라던지 런타임환경에서 발생할 수 있는 후속작업에 연계성이 좋음
}
{
	// 그래서? 어케 하냐?
	// enum의 장점을 가져옴
	// const enum의 장점? 은 모르겟는데 하여간 갖고온다캄

	// 번들러 => SASS, SCSS, TS => HTML, CSS, Javascript로 변환해주면서 코드의 양을 압축해줌
	// 트리셰이킹 -> 불필요한 코드를 제거해주는 기능
  // const로 단언하는 방법은 트리셰이킹이 가능. 그런데 일반적인 enum은 안됨

	const Status = {
		PENDING: "PENDING",
		SUCCESS: "SUCCESS",
		FAILED: "FAILED",
	} as const;

	// 타입스크립트의 type으로 지정하는애는 변수명 같아도 노프라블럼

	type Status = (typeof Status)[keyof typeof Status]; // type Status = "PENDING" | "SUCCESS" | "FAILED"
	const options = Object.values(Status).map((value) => ({
		label: value,
		value,
	}));
}
