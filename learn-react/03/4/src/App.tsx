import User from "./components/User";

export default function App() {
	return (
		<>
			{/* HTML의 속성은 그 태그의 이름이나 기능을 보충해주는 역할 */}
			{/* 컴포넌트의 속성은 그 컴포넌트로 데이터를 전달해주는 기능 */}
			<User name="박상아" age={29} />
			<User name={"박상아"} age={29} />
			{/* 둘다 똑같음 */}
			<User
				name={"박상아"}
				age={29}
				address={{ zipcode: 12345, detail: "광주" }}
			/>
		</>
	);
}
