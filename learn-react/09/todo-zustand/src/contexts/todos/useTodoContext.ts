// 커스텀 훅
// 리액트에서 use로 시작하는 사용자 정의 함수를 말합니다
// 리액트에서 제공하는 기본 훅을 조합해서 공통 로직을 재사용 가능하게 만드는 도구
// 기존에 존재하는 리액트 훅을 사용해서 나만의 훅을 새로 정의

import { useContext } from "react";
import { TodoActionContext, TodoContext } from "./todoContext";

// use***

export function useTodoContext() {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error(
			`useTodoContext()는 TodoProvider 영역에서만 사용할 수 있습니다.`,
		);
	}
	return context;
}

export function useTodoActionContext() {
	const context = useContext(TodoActionContext);
	if (!context) {
		throw new Error(
			`useTodoActionContext()는 TodoProvider 영역에서만 사용할 수 있습니다.`,
		);
	}
	return context;
}
