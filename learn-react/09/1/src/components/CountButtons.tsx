import { useCounterStore } from "../store/counterStore";

export default function CountButtons() {
	console.log("CounterButtons Rendering"); // zustand는 컴포넌트 최적화까지... 전역상태관리의 탑...
	const increment = useCounterStore((state) => state.increment);
	const decrement = useCounterStore((state) => state.decrement);
	const reset = useCounterStore((state) => state.reset);
	const incrementByAmount = useCounterStore((state) => state.incrementByAmount);
	return (
		<>
			<button onClick={increment}>증가</button>
			<button onClick={decrement}>감소</button>
			<button onClick={reset}>리셋</button>
			<button onClick={() => incrementByAmount(20)}>20씩 증가</button>
		</>
	);
}
