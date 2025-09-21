import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

export default function Count({
	count,
	increment,
	decrement,
	reset,
}: {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
}) {
	return (
		<>
			<CountDisplay count={count} />
			<CountButton
				count={count}
				increment={increment}
				decrement={decrement}
				reset={reset}
			/>
		</>
	);
}
