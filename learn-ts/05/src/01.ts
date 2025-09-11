// 클래스
// 1. 타입시스템 제공
// 2. 접근 제한자 지원
// 2-1. public, protected, private, readonly
// 2-2. #private가 추가되었지만 다름
// 3. 추상 클래스, 인터페이스와 결합 가능

{
	// 클래스
	class Car {
		speed: number;
		constructor(speed: number) {
			this.speed = speed;
		}
		start(name: string): string {
			return `${name}, start!`;
		}
	}

	const benz = new Car(100);
	console.log(benz.start("benz"));
	console.log(benz.speed);

	class Person {
		name: string;
		age: number;
		constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
		}
		introduce(): string {
			return `Hello, ${this.name}, ${this.age}`;
		}
	}
	const person = new Person("john", 20);
	console.log(person.introduce());
}
{
	// public - 기본값. 클래스 내/외부/상속에서 접근
	class Car {
		// public speed: number;
		readonly speed: number; // 붙여도 되고 안붙여도 됨
		constructor(speed: number) {
			this.speed = speed;
		}
		// private - 클래스 내부에서만 접근 가능
		private secret(): string {
			return "대형사고";
		}
		search(): string {
			return this.secret();
		}
	}

	const car = new Car(100);
	// car.speed = 500; // readonly는 외부에서 수정을 하려고 하면 오류뜸
	// console.log(car.secret()); // 출력 불가
	console.log(car.search()); // 내부 함수로 들어가서 출력이 됨
}
{
	// public - 기본값. 클래스 내/외부/상속에서 접근
	class Car {
		private engineOn: boolean = false;
		start() {
			if (this.engineOn) {
				console.log("Engine is alreay started");
			}
			this.engineOn = true;
			console.log("Engine started");
		}
		stop() {
			if (!this.engineOn) {
				console.log("Engine is already stopped");
			}
			this.engineOn = false;
			console.log("Engine stopped");
		}
		isEngineOn(): boolean {
			return this.engineOn;
		}
	}

	const bmw = new Car();
	bmw.start();
	bmw.start();
	bmw.stop();
	bmw.stop();
	console.log(bmw.isEngineOn());
}
{
	class Car {
		// private는 접근제한으로 상속받는 클래스에서 해당 인스턴스를 불러오려고 했을 때 오류가 생김
		// protected는 상속받는 클래스에서 값을 가져올 수 있음. 하지만 외부에서 접근 불가
		// protected - 외부에서 접근이 불가.
		protected speed: number;
		constructor(speed: number) {
			this.speed = speed;
		}
	}
	class Benz extends Car {
		showSpeed() {
			console.log(this.speed);
		}
	}

	const benz = new Benz(100);
	benz.showSpeed();
}
{
	// readonly - 한번 값을 할당하면 수정 불가
	class Config {
		readonly apiUrl = "https://api.example.com";
		readonly appVersion = "v1.0";

		displayConfig() {
			console.log(`API_URL:${this.apiUrl}, APP_VERSION:${this.appVersion}`);
		}
	}

	const config = new Config();
	console.log(config.apiUrl);
	console.log(config.appVersion);
	config.displayConfig();
}
{
	// 메소드 오버라이딩
	class Car {
		speed: number;
		constructor(speed: number) {
			this.speed = speed;
		}
		getSpeed(): string {
			return `Car:${this.speed}`;
		}
	}

	class Benz extends Car {
		name: string;
		constructor(speed: number, name: string) {
			super(speed);
			this.name = name;
		}
	}

	// 부모가 string으로 내보내기 때문에 그대로 내보내야함
	const benz = new Benz(100, "S Class");
	console.log(benz.getSpeed());
}
{
	// 추상 클래스
	// 직접 인스턴스를 생성할 수 없는 클래스.
	// 주로 공통의 속성이나 메서드를 정의하기 위해서 사용(직접 구현도 가능)
	abstract class Animal {
		abstract makeSound(): void;
	}
	class Dog extends Animal {
		makeSound() {
			console.log("멍");
		}
	}
	const dog = new Dog();
	dog.makeSound();
}
{
	abstract class CarAbstract {
		code: string = "1231243"; // 직접 구현하기
		abstract name: string; // 자식 클래스에서 구현하기
		abstract speed: number;
		abstract color: string;
		abstract maxSpeed(): number;
		start() {
			console.log("start");
		}
	}

	class Benz extends CarAbstract {
		name: string;
		speed: number;
		color: string;
		constructor(name: string, speed: number, color: string) {
			super(); // this를 사용하기 위해서 부모 생성자 호출
			this.name = name;
			this.speed = speed;
			this.color = color;
		}
		maxSpeed(): number {
			return this.speed;
		}
	}

	const benz = new Benz("2", 100, "Red");
	console.log(benz.start());
	console.log(benz.code);
}
{
	// 추상클래스
	// 장점: 연관된 클래스에 공통의 속성과 메서드를 구현하도록 강제할 수 있다
	// 단점: 다른 클래스를 추가 상속하지 못하게 한다.

	// implements + interface(type)
	interface Runner {
		run(): void;
	}
	interface Swimmer {
		swim(): void;
	}
	abstract class PersonAbstarct {
		abstract stop(): void;
	}
	class Person extends PersonAbstarct implements Runner, Swimmer {
		name: string;
		constructor(name: string) {
			super();
			this.name = name;
		}
		run() {
			console.log("Person is Run!");
		}
		swim(): void {
			console.log("Person is Swim!");
		}
		stop(): void {}
	}
}
// 상속의 개념을 그대로 활용하면서 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현) => abstract
// 상속과 별개로 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 X) => implements