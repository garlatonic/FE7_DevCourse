// import type { Dispatch, SetStateAction } from "react";
export default function Count({
	count,
	handleIncrement,
}: {
	count: number;
	handleIncrement: () => void;
	// setCount: Dispatch<SetStateAction<number>>;
}) {
	return (
		<>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrement}>증가</button>
		</>
	);
}
