import { useState } from "react";
import Count from "./components/Count";
import CountOutside from "./components/CountOutside";

export default function App() {
	const [count, setCount] = useState(0);
	const increment = () => setCount((count) => count + 1);
	const decrement = () => setCount((count) => count - 1);
	const reset = () => setCount(0);

	return (
		<>
			<Count
				count={count}
				increment={increment}
				decrement={decrement}
				reset={reset}
			/>
			<CountOutside count={count} />
		</>
	);
}
