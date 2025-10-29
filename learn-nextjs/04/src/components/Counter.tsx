"use client";
import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Count : {count}</h1>
			<button onClick={() => setCount((count) => count - 1)}>감소</button>
			<button onClick={() => setCount((count) => count + 1)}>증가</button>
		</>
	);
}

// 페이지 컴포넌트는 항상 server 컴포넌트여야함 => 규칙
// 번거롭더라도 따로 컴포넌트를 분리하여 사용할 것
