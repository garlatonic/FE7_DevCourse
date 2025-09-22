import { useState } from "react";

export default function C() {
	const [count, setCount] = useState(0);
	console.log("C Rerendring");
	return (
		<>
			<h1>C Count: {count}</h1>
			<button onClick={() => setCount((count) => count + 1)}>증가</button>
		</>
	);
}
