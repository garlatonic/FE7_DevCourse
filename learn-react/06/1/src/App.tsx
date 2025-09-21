// useRef()
// 리액트에서 값을 기억하거나 DOM 요소에 직접 접근할 때 사용하는 훅
// current 속성을 가지는 객체를 반환하며, current 속성으로 이것저것 가능

import { useRef, useState } from "react";
import Input from "./components/Input";

// 폼 요소를 제어하는 방법
// 1. 제어 컨트롤러 (controlled)
// 입력값이 리액트의 상태에 의해서 제어되는 컴포넌트
// useState + onChange
// 2. 비제어 컨트롤러 (uncontrolled)
// 실시간 입력값 체크가 불가능
// 입력값이 DOM 자체에서 관리되는 컴포넌트
// useRef + current

export default function App() {
	const [email, setEmail] = useState("");
	const emailRef = useRef<HTMLFormElement>(null);
	const [pw, setPw] = useState("");
	const pwRef = useRef<HTMLFormElement>(null);
	const handleEmailUpdate = (email: string) => setEmail(email); // 상태업데이트 되는 함수를 만들고 넘겨주는게 좀더 좋은 방법
	const handlePwUpdate = (pw: string) => setPw(pw); // 상태업데이트 되는 함수를 만들고 넘겨주는게 좀더 좋은 방법

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (email.trim() === "") {
			alert("이메일을 입력해주세요");
			// 포커스를 넣고 싶음
			if (emailRef.current) emailRef.current.focus();
			return;
		}
		if (pw.trim() === "") {
			alert("비밀번호를 입력해주세요");
			// 포커스를 넣고 싶음
			if (pwRef.current) pwRef.current.focus();
			return;
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Input
					placeholder="이메일 입력"
					value={email}
					ref={emailRef}
					setValue={handleEmailUpdate}
				/>
				<Input
					placeholder="패스워드 입력"
					value={pw}
					ref={pwRef}
					setValue={handlePwUpdate}
				/>
				<button>로그인</button>
			</form>
		</>
	);
}
