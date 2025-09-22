import { useReducer } from "react";
import formReducer from "../reducer/formReducer";

export default function Form() {
	const [formState, formDispatch] = useReducer(formReducer, {
		email: "",
		pw: "",
	});
	return (
		<>
			<form>
				<input
					type="text"
					placeholder="이메일"
					value={formState.email}
					onChange={(e) =>
						formDispatch({ type: "SET_EMAIL", payload: e.target.value })
					}
				></input>
				<input
					type="password"
					placeholder="비밀번호"
					value={formState.pw}
					onChange={(e) =>
						formDispatch({ type: "SET_PW", payload: e.target.value })
					}
				></input>
				<button>로그인</button>
			</form>
		</>
	);
}
