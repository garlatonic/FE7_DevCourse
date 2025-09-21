// useEffect 훅
// 컴포넌트의 사이드 이펙트 (side effect)를 처리하기 위한 훅
// 사이드 이펙트 ?
// 데이터 가져오기, DOM 조작, 이벤트 등록/해제, 타이머 설정/해제...
// 실제 렌더링을 위한 동작을 제외한, 모든 나머지 코드를 사이드 이펙트라고 함

import { useEffect, useState } from "react";
import Interval from "./components/interval";

// 생명 주기
// 컴포넌트가 생성, 수정, 삭제 기준으로 동작하기 때문
export default function App() {
	const [count, setCount] = useState(0);

	// 컴포넌트가 생성될 때 코드를 실행하는 방법
	useEffect(() => {
		// 사이드 이펙트를 처리하기 위한 코드
		console.log("App 컴포넌트 렌더링");
	}, []);
	// 특정 변수가 수정될 때 코드를 실행할때는?
	// useEffect(() => {
	// 	// 사이드 이펙트를 처리하기 위한 코드
	// 	console.log("변경이 됨");
	// 	return () => {
	// 		// 컴포넌트가 삭제될 때 호출되는 함수
	// 	};
	// }, [count]);
	return (
		<>
			<h1>Count:{count}</h1>
			<button onClick={() => setCount((count) => count + 1)}>증가</button>
			{count % 2 === 0 && <Interval />}
		</>
	);
}
