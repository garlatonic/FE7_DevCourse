import ButtonEx1 from "./components/ButtonEx1";
import CheckEx1 from "./components/CheckEx1";
import InputEx1 from "./components/InputEx1";

export default function App() {
	const buttonClickHandler = () => {
		console.log(`clicked`);
	};
	return (
		<div className="center flex-col gap-8 min-h-screen bg-gray-800">
			<InputEx1
				id="todo"
				type="text"
				className="w-60 h-11 px-4 border border-[#4f4f4f] rounded-lg bg-white text-sm font-medium text-black placeholder:text-(#acacac) inter"
			/>
			<div className="flex flex-col gap-5">
				<ButtonEx1 className="bg-gray">Add</ButtonEx1>
				<ButtonEx1 className="bg-red">Cancel</ButtonEx1>
				<ButtonEx1 className="bg-purple">Success</ButtonEx1>
			</div>
			<CheckEx1
				className="checkbox center gap-2"
				id="agree"
				message={"I agree with terms and policies."}
			/>
		</div>
	);
}

{
	/* <Button text={"결제하기"}></Button>
<Button text={"등록하기"}></Button> */
}
{
	/* <Button>결제하기</Button>
<Button>등록하기</Button>
<Button onClick={clickHandler}>결제하기</Button> */
}
