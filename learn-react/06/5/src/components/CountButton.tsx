export default function CountButton({
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
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
			<button onClick={reset}>0</button>
		</>
	);
}
