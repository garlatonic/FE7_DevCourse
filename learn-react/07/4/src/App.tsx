import { createContext, useState } from "react";
import Page from "./components/Page";
import Count from "./components/Count";

// 전역 상태 관리
// Context API
// Redux Toolkit
// Zustand (주스탄드, 져스탠드, 져스탄드)
// Mobx, recoil ...

// Context API
// 1. 컨텍스객체를 생성해야함 -> createContext
// 2. 컨텍스트의 범위를 지정해야 함 -> <컨텍스트객체>공급범위</컨텍스트객체>
// 3. 데이터를 공급 -> 컨텍스트 객체에 value 속성을 사용
// 4. 사용

type CounterContextType = {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
};
// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterContextType | null>(null);

export default function App() {
	const [count, setCount] = useState(0);
	const increment = () => setCount((count) => count + 1);
	const decrement = () => setCount((count) => count - 1);
	const reset = () => setCount(0);
	return (
		<>
			<CounterContext value={{ count, increment, decrement, reset }}>
				<Page />
			</CounterContext>
		</>
	);
}
