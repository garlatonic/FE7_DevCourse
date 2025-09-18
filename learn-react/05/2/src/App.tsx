// 이벤트
// JSX 특징 -> 속성은 카멜케이스로 작성
// 이벤트 객체

import Button from "./components/Button";

export default function App() {
	const handleClick = (name: string) => {
		alert(name);
	};
	const handleClick2 = () => {
		alert("매개변수 엄슴");
	};
	// const handleClick3 = (
	// 	e: React.MouseEvent<HTMLButtonElement>,
	// 	name?: string,
	// ) => {
	// 	console.log(e); // 병시적으로 전달하여 사용할 것
	// 	console.log(event); // 사용하면 안됨
	// };
	const handleClick3 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log(e);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log(e);
	};
	return (
		<>
			{/* <Button
				handleClick={() => handleClick("name")}
				handleClick2={handleClick2}
			/> */}
			{/* 못 외우겠으면 타입추론 기능을 사용. e에 커서를 올리면 해당 타입이 보임! */}
			{/* <form onSubmit={(e) => handleSubmit(e)}> */}
			<form onSubmit={handleSubmit}>
				<button onClick={(e) => handleClick3(e)}>클릭</button>
			</form>
		</>
	);
}
