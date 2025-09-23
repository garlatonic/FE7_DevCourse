import { useContext } from "react";
import { CounterContext } from "../App";

export default function CountDisplay() {
	const { count } = useContext(CounterContext)!;
	return (
		<>
			<h1>Count: {count}</h1>
		</>
	);
}
