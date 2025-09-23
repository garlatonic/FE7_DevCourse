import { useContext } from "react";
import { CounterContext } from "../contexts/counter/counterContext";

export default function CountButtons() {
	const { reset, decrement, increment } = useContext(CounterContext);

	return (
		<>
			<button onClick={reset}>리셋</button>
			<button onClick={decrement}>감소</button>
			<button onClick={increment}>증가</button>
		</>
	);
}
