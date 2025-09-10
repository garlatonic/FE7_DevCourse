// 클래스
// 1. 타입 지정
class user {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	greet(): string {
		return `Hello, ${this.name}`;
	}
}
// 2. 접근제어자 (public, private, protected, readonly)
// public - 누구나 접근 가능(인스턴스 외부, 클래스 내부, 상속 클래스, 등등..) 생략 public
// private - 클래스 내부에서만 접근이 가능 (외부 x, 상속 X)
// protected - 클래스 외부에서만 접근 물가능(내부는 O, 상속도 O)
class Car {
	// private speed: number;
	protected speed: number;
	constructor(speed: number) {
		this.speed = speed;
	}
}
class Benz extends Car {
	printSpeed():void {
		console.log(`This Speed is ${speed}`);
	}
}
