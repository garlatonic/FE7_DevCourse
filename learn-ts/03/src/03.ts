// 인터페이스
// 객체의 타입을 지정할 때 사용하는 타입 지정 방법
// interface
// type 식별자 = 할당
// interface 식별자 {}

// 국내에서는 대부분 객체는 인터페이스로 정의하고
// 그 외에는 타입별칭

type Gender = "male" | "female" | "natural";
interface Person {
	name: string;
	age: number;
	gender: Gender;
	greet(): void; // 단축속성 방법으로도 타입 지정 가능
}

const person: Person = {
	name: "sanga",
	age: 29,
	gender: "female",
	greet() {
		console.log(`Hello, ${this.name}`);
	},
};

// 타입별칭으로 할지, 인터페이스로 할지
// 일단 interface가 객체에 특화되어서 interface를 쓰는게? 좋아보이기두

// interface의 특징?? 자동으로 병합이 됨
interface Player {
	name: string;
}
interface Player {
	age: number;
}
const player: Player = {
	name: "sanga",
	age: 20,
	// 둘다 써야지만 오류 X
};

// 상속
{
	interface Person {
		name: string;
		age: number;
	}
	interface Developer extends Person {
		skill: string;
	}
}
// 다중 인터페이스 상속
{
	interface Flyer {
		fly(): void;
	}
	interface Swimmer {
		swim?(): void;
	}
	interface Bird extends Flyer, Swimmer {
		sound(): void;
	}

	const duck: Bird = {
		fly() {},
		sound() {},
	};
}
