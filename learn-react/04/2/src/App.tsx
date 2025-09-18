import ButtonEx1 from "./components/ButtonEx1";
import CheckEx1 from "./components/CheckEx1";
import InputEx1 from "./components/InputEx1";

export default function App() {
	return (
		<div className="center flex-col gap-8 min-h-screen bg-gray-800">
			<InputEx1 type="text" placeholder="Enter Todo List" />
			<div className="flex flex-col gap-5">
				<ButtonEx1 className="bg-gray">Add</ButtonEx1>
				<ButtonEx1 className="bg-red">Cancel</ButtonEx1>
				<ButtonEx1 className="bg-purple">Success</ButtonEx1>
			</div>
			<CheckEx1 id="agree" type="checkbox">
				I agree with <strong>terms</strong> and <strong>policies</strong>.
			</CheckEx1>
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
