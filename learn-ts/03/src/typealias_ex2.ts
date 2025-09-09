// 1
{
	type Action = {
		type: string;
		payload: string | number | { [key: string]: string | number };
	};

	// code
	function createAction(
		type: string,
		payload: string | number | { [key: string]: string | number },
	): Action {
		return { type, payload };
	}

	// 함수 호출 예시
	const action1 = createAction("ADD_ITEM", { id: 1, name: "item" });
	const action2 = createAction("UPDATE_ITEM", 42);
	const action3 = createAction("SET_STATUS", "success");

	console.log(action1); // { type: 'ADD_ITEM', payload: { id: 1, name: 'item' } }
	console.log(action2); // { type: 'UPDATE_ITEM', payload: 42 }
	console.log(action3); // { type: 'SET_STATUS', payload: 'success' }
}
// 2
{
	type NumberOrString = number | string;
	function createObject(
		id: NumberOrString,
		name: string,
	): { id: NumberOrString; name: string } {
		return { id, name };
	}

	const object1 = createObject(1, "Alice");
	const object2 = createObject("123", "Bob");

	console.log(object1); // { id: 1, name: 'Alice' }
	console.log(object2); // { id: '123', name: 'Bob' }
}
// 3
{
	type Point = { x: number; y: number };

	const calculateDistance = (a: Point, b: Point): number => {
		return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
	};

	console.log(calculateDistance({ x: 2, y: 1 }, { x: 3, y: 4 }));
}
// 4
{
	type LoadingResult = { status: "loading" };
	type SuccessResult = { status: "success"; data: "Data loaded successfully!" };
	type ErrorResult = { status: "error"; message: "Failed to load data." };
	type FetchResult = LoadingResult | SuccessResult | ErrorResult;

	const fetchData = function (): FetchResult {
		const fetchCase: number = Math.ceil(Math.random() * 2);
		if (fetchCase === 0) return { status: "loading" };
		if (fetchCase === 1)
			return { status: "success", data: "Data loaded successfully!" };
		else return { status: "error", message: "Failed to load data." };
	};

	const result1 = fetchData();
	const result2 = fetchData();
	const result3 = fetchData();

	console.log(result1); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
	console.log(result2); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
	console.log(result3); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
}
// 5
{
	type NullOrUndefined = null | undefined;

	function getValue(value) {
		if(typeof value === "null" || typeof value)
	}

	// 어케 접근해야할지...

	const check1 = getValue(null);
	const check2 = getValue(undefined);
	const check3 = getValue("Hello");

	console.log(check1); // true
	console.log(check2); // true
	console.log(check3); // false
}
// 6
{
	type Coordinates = [number, number];

	function setCoordinates(x: number, y: number): Coordinates {
		return [x, y];
	}

	const coordinates = setCoordinates(10, 20);
	console.log(coordinates); // [10, 20]
}
// 7
{
	//code
	type Person = {
		readonly name: string;
		readonly age: number;
	};

	const createPerson = (name: string, age: number): Person => ({ name, age });

	const person = createPerson("John", 30);

	// person 객체의 속성은 변경할 수 없도록 해야 합니다.
	person.name = "Jane"; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
	console.log(person); // { name: 'John', age: 30 }
}
// 8
{
	type User = { id?: string; name?: string; email?: string };

	function updateUser(user: User, data: User): User {
		return { ...user, ...data };
	}

	const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
	const updatedUser1 = updateUser(user1, { name: "Alicia" });

	console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}
// 9
{
	type Role = {};
}
