import { useEffect } from "react";
import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";
import { useCounterStore } from "../store/counterStore";

export default function Count() {
	// useEffect(() => {useCounterStore.subscribe(구독할상태, 구독중인 상태가 변경되면호출)}, [])
	useEffect(() => {
		useCounterStore.subscribe(
			(state) => state.count,
			(newCount, prevCount) => {
				console.log(`count 변경 ${prevCount} ${newCount}`);
			}
		);
	}, []);
	return (
		<>
			<CountDisplay />
			<CountButtons />
		</>
	);
}
