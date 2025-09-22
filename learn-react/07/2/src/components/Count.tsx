import { useReducer } from "react";
import { reducer } from "../reducer/countReducer";
export default function Count() {
	const [count, countDispatch] = useReducer(reducer, 0);

	return (
		<>
			<h1>Count: {count}</h1>
			<button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
			<button onClick={() => countDispatch({ type: "RESET" })}>0</button>
			<button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button>
		</>
	);
}
