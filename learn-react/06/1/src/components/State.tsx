import { useState } from "react";
// 리액트에서 상태(state)
// 컴포넌트 내부에서 변경 가능한 데이터를 의미합니다.
// 사용자 입력, 서버 응답, UI 상호작용 등으로 인해 값이 변경될 수 있다.
// 만약 값이 변경되면 컴포넌트가 자동으로 다시 렌더링되어 화면에 새로운 값이 반영됨.

// 리액트 훅(16.8)
// 함수형 컴포넌트에서도 상태(state)나 생명주기(lifecycle) 같은 리액트 기능을 사용할 수 있게 해주는 특별한 함수
// useState(), useRef(), useReducer(), useEffect() ...

interface User {
	name: string;
	age: number;
}

export default function App() {
	// useState를 사용하는 변수는 보통 배열같이 표현(구조분해할당) [상태변수 , 상태업데이트함수]
	const [user, setUser] = useState<User>({ name: "kim", age: 20 });
	const handleUpdate = () => {
		// 상태업데이트함수(값) -> 변경해야하는 상태 값이 이전 상태와 상관이 없다면?
		// setUser({
		// 	name: "park",
		// 	age: 30,
		// });
		// 상태업데이트함수(콜백) -> 변경해야하는 상태값이 이전 상태와 관련이 있다면?

		// setUser로 age만 변경하려고하면 변경되지않는다. 왜일까? 참조 자료형은 주소값은 그대로고 내부만 바뀌는 거라, 아예 새로운 껍데기를 만들어줘야함
		// user.age = 30;
		// const newUser = structuredClone(user); // 깊은 복사를 통한 새로운 객체
		// setUser(newUser);
		setUser((user) => ({ ...user, age: 40 }));
		// 스프레드 연산자는 얕은 복사지만 주소값이 다른 새로운 객체를 반환한다. 그래서 react의 usestate가 값이 변경되었다고 인식하고 상태변경이 된다.
	};
	return (
		<>
			<h1>name: {user.name}</h1>
			<h1>age: {user.age}</h1>
			<button onClick={handleUpdate}>클릭</button>
		</>
	);
}
