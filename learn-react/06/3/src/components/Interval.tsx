import { useEffect } from "react";

export default function Interval() {
	useEffect(() => {
		const interval = setInterval(() => {
			console.log("interval 코드 실행");
		}, 1000);

		// 클린업 함수
		// 컴포넌트가 제거될 때, 정리하는 코드를 작성할 수 있다
		return () => {
			clearInterval(interval);
			console.log("Interval 컴포넌트 제거됨");
		};
	}, []);
	return (
		<>
			<h1>interval Component</h1>
		</>
	);
}
