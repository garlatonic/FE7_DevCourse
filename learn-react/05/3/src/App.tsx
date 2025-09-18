// 자바스크립트 변수 선언 키워드가 있고
// var let const
// 리액트 변수 선언 키워드가 있음

import { useState } from "react";

// useState()
export default function App() {
	// 상태변수, 상태업데이트 함수
	// 무족권 const 쓰는게 좋음
	const [count, setCount] = useState(0); // useState() 안에 들어가는건 초기값
	const handleIncrement = () => {
		// setCount(count + 1); // setCount(값으로 설정하는 방법)
		setCount((count) => {
			return count + 1;
		}); // setCount(콜백함수) 로 넘기는 방법
		// 콜백함수로 전달할 경우 항상 최신의 상태값을 전달받음
	};
	const [name, setName] = useState("");
	return (
		<>
			<h1>{count}</h1>
			<button onClick={handleIncrement}>증가</button>
			<h1>{name}</h1>
			<input id="name" type="text"></input>
			{/* <button onClick={() => setName(() => {return document.querySelector("#id")!.value})} */}
		</>
	);
}
