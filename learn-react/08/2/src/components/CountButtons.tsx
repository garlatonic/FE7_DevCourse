import { useDispatch } from "react-redux";
import { type AppDispatch } from "../store/store";
import {
	increment,
	decrement,
	reset,
	incrementAmount,
} from "../store/slice/counterSlice";
import { setIsDark, setIsLight } from "../store/slice/configureSlice";

export default function CountButtons() {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<>
			<button onClick={() => dispatch(increment())}>증가</button>
			<button onClick={() => dispatch(decrement())}>감소</button>
			<button onClick={() => dispatch(reset())}>리셋</button>
			<button onClick={() => dispatch(incrementAmount({ amount: 10 }))}>
				10 증가
			</button>
			<br />
			<br />
			<button onClick={() => dispatch(setIsDark())}>다크모드</button>
			<button onClick={() => dispatch(setIsLight())}>라이트모드</button>
		</>
	);
}
