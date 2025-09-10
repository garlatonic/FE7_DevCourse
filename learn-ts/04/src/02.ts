{
	// enum (이넘)
	type MoveX = "left" | "right";
	function characterMoveX(direction: MoveX): void {
		if (direction === "left") console.log("왼쪽으로 이동");
		if (direction === "right") console.log("오른쪽으로 이동");
	}

	characterMoveX("left");
	characterMoveX("right");

	// 이외에 top, bottom을 입력해도 일단 함수에 통과가 됨...
	// 이는? 미래지향적 사고로 보면 오류가 생길 수 있음

	// 리터럴 타입을 사용하면 됨 (아 단어좀 외워야겠음 리터럴!)

	type Move = "left" | "right" | "up" | "down";
	function vehicleMove(direction: Move): void {
		if (direction === "left") console.log("왼쪽");
		if (direction === "right") console.log("오른쪽");
		if (direction === "up") console.log("위쪽");
		if (direction === "down") console.log("아래쪽");
	}

	vehicleMove("left");
	vehicleMove("down");
	vehicleMove("up");

	// 이렇게 쓰면 불편한점??
	// 검색이 잘됨... 너무잘됨
}
{
	// 이넘?
	// 고정된 값들의 집합을 정의하는데 사용하는 특수한 타입
	enum CharacterMove {
		LEFT,
		RIGHT,
	}
	enum RotateMove {
		LEFT,
		RIGHT,
	}
	enum VehicleMove {
		UP,
		DOWN,
		LEFT,
		RIGHT,
	}

	function characterMoveX(direction: CharacterMove): void {
		if (direction === CharacterMove.LEFT) console.log("왼쪽으로 이동");
		if (direction === CharacterMove.RIGHT) console.log("오른쪽으로 이동");
	}
	characterMoveX(CharacterMove.LEFT);
	characterMoveX(CharacterMove.RIGHT);

	function vehicleMove(direction: VehicleMove): void {
		if (direction === VehicleMove.LEFT) console.log("왼쪽");
		if (direction === VehicleMove.RIGHT) console.log("오른쪽");
		if (direction === VehicleMove.UP) console.log("위쪽");
		if (direction === VehicleMove.DOWN) console.log("아래쪽");
	}
	vehicleMove(VehicleMove.LEFT);

	// 가독성을 좋게 할 수도 있꼬~ 안써도 되긴한데 장점을 얻을 수 있어서 코드가 명확해짐

	function characterMove(direction: CharacterMove | RotateMove) {
		if (direction === CharacterMove.LEFT) console.log("왼쪽으로 이동");
		if (direction === CharacterMove.RIGHT) console.log("오른쪽으로 이동");
		if (direction === RotateMove.LEFT) console.log("왼쪽으로 회전");
		if (direction === RotateMove.RIGHT) console.log("오른쪽으로 회전");
	}
}
{
	// 숫자형 enum
	enum Direction {
		UP,
		DOWN,
		LEFT,
		RIGHT,
	}

	console.log(Direction);
	/* 
  {
    '0': 'UP',
    '1': 'DOWN',
    '2': 'LEFT',
    '3': 'RIGHT',
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3
  }
  */

	console.log(Direction.UP); // 0
	// 원하는 숫자를 할당할 수 있음

	/*
  
  enum Direction {
		UP, // 0
		DOWN = 100, // 100
		LEFT = 300, // 300
		RIGHT, // 301
	}
  설정한 뒤부터 1씩 오름

  */
}
{
	enum StatusCode {
		OK = 200,
		BadRequest = 400,
		Unauthorized = 401,
		NotFound = 404,
	}

	function handleResponse(code: StatusCode) {
		switch (code) {
			case StatusCode.OK:
				return "성공";
			case StatusCode.BadRequest:
				return "실패";
			case StatusCode.Unauthorized:
				return "인증에러";
			case StatusCode.NotFound:
				return "찾을 수 없음";
		}
	}

	handleResponse(StatusCode.BadRequest);
}
{
	// 문자 enum(열거형)
	enum Direction {
		UP = "Up",
		DOWN = "Down",
		LEFT = "Left",
		RIGHT = "Right",
	}

	console.log(Direction.DOWN); // Down
}
{
	// 혼합 enum (열거형)
	enum Mix {
		YES = 1,
		NO = "NO",
	}

	enum Direction {
		UP = 200,
		DOWN = "UP",
		LEFT = 300,
		RIGHT = "DOWN",
	}

	console.log(Direction);
	/* 
  
  {
    '200': 'UP',
    '300': 'LEFT',
    UP: 200,
    DOWN: 'UP',
    LEFT: 300,
    RIGHT: 'DOWN'
  }
  
  */
}
{
	// 리버스 매핑, 역방향 매핑
	// 숫자형 이넘에만 지원되는 개념

	enum Direction {
		UP,
		DOWN,
		LEFT,
		RIGHT,
	}

	console.log(Direction.UP); // 0
	console.log(Direction[0]); // "UP"
}
{
	enum Key {
		ArrowUp,
		ArrowDown,
	}
	function onKeyPressed(code: Key) {
		console.log("Pressed : " + Key[code]);
	}

	onKeyPressed(Key.ArrowDown); // 1
	onKeyPressed(1);
}
{
	// const enum
	enum Direction {
		UP,
		DOWN,
		LEFT,
		RIGHT,
	}
	const enum DirectionConst {
		UP,
		DOWN,
		LEFT,
		RIGHT,
	}

	console.log(Direction.UP);
	// const enum과 enum의 차이점은?
	// enum타입은 컴파일 될때마다 js가 와방 써져서 용량이 커짐
	console.log(DirectionConst.UP);
	// const enum 은파일의 크기가 아주아주 작아짐
	// 하지만?? 역방향 매핑이 불가능함

	// "use strict";
	// var Direction;
	// (function (Direction) {
	//     Direction[Direction["UP"] = 0] = "UP";
	//     Direction[Direction["DOWN"] = 1] = "DOWN";
	//     Direction[Direction["LEFT"] = 2] = "LEFT";
	//     Direction[Direction["RIGHT"] = 3] = "RIGHT";
	// })(Direction || (Direction = {}));
	// console.log(Direction.UP);
	// console.log(0 /* DirectionConst.UP */;
}
{
	// 객체 - interface (type)
	// 리터럴 타입 - enum (const enum)
	// 타입별칭 - 유니온타입, 인터섹션

	const enum Role {
		ADMIN = "admin",
		GUEST = "guest",
	}
	interface Account {
		id: number;
		role: Role;
	}
	type AuthAccount = Account & { token?: string };

  // 상황에 따라서 여러방법으로 사용할 수 있음
  // 언제 쓰냐에 대한 정답은 없따
}
