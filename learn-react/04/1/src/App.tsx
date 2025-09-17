import Content from "./components/Content";
import Ex1Array from "./components/Ex1Array";
import Ex1Boolean from "./components/Ex1Boolean";
import Ex1Children from "./components/Ex1Children";
import Ex1Design from "./components/Ex1Design";
import Ex1Function from "./components/Ex1Function";
import Ex1Number from "./components/Ex1Number";
import Ex1Object from "./components/Ex1Object";
import Ex1String from "./components/Ex1String";
import Ex1Props from "./components/Ex1Props";
import Ex1Style from "./components/Ex1Style";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import User from "./components/User";

export default function App() {
	const userObj = {
		name: "박상아",
		age: 30,
		gender: "female",
	};
	const clickHandler = () => {
		console.log("click");
	};

	const isLoggedIn = true;
	const onClick = () => {
		console.log("크릭");
	};
	return (
		<>
			<User userObj={userObj} clickHandler={clickHandler} />
			{/* 전개 연산자를 사용한 component props 처리 */}
			<Profile {...userObj} />
			<Ex1String string="Hello, World!" />
			<Ex1Number number={42} />
			<Ex1Array array={["Apple", "Banana", "Cherry"]} />
			<Ex1Object object={{ name: "Alice", age: 30 }} />
			<Ex1Boolean boolean={isLoggedIn} />
			<Ex1Function func={onClick} />
			<Ex1Props name="홍길동" />
			<Ex1Style styled={{ fontSize: "50px", color: "red" }} />
			<Ex1Children>
				<Header />
				<Content />
				<Footer />
			</Ex1Children>
			<Ex1Design
				bg={
					"https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				}
				userImage={
					"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				}
				alias={"Sally Ramos"}
				username={"@sallytheramos"}
				clickHandler={onClick}
			/>
		</>
	);
}
