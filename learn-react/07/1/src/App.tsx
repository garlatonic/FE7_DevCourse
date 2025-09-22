// 상태 관리
// useState() vs useReducer()
// useState()
// 장점: 직관적이고 문법이 쉬움
// 단점: 상태 업데이트 로직이 컴포넌트 내부에 흩어지기 쉽다.

// useReducer()
// 장점: 상태 업데이트 로직이 한 곳에 몰려있음
// 단점: 문법이 어려움
// 복잡한 상태 관리를 할 때 사용한다

import { useState } from "react";
import Count from "./components/Count";

export default function App() {
	const [count, setCount] = useState(0);
	const handleIncrement = () => {
		setCount(10);
	};
	return (
		<>
			{/* <h1>Count: {count} </h1> */}
			{/* <button onClick={() => setCount(100)}>업데이트</button> */}
			{/* <button onClick={handleIncrement}>업데이트</button> */}
			{/* <Count count={count} setCount={setCount} /> */}
			<Count count={count} handleIncrement={handleIncrement} />
		</>
	);
}
