import { useRef } from "react";
import Button from "./html/Button";
import Input from "./html/Input";

export default function TodoEditor({
	listItem,
	addTodo,
}: {
	listItem: Todo[];
	addTodo: (addItem: Todo) => void;
}) {
	const editorRef = useRef<HTMLInputElement>(null);

	// 제출용 핸들러
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const inputValue = editorRef.current?.value;

		// 값 없을 때 포커싱
		if (inputValue === undefined || inputValue === "") {
			alert("할일을 입력해주세요.");
			editorRef.current?.focus();
			return;
		}

		// 마지막 배열값 id 추출, 없으면 0으로
		const lastItemId = listItem[listItem.length - 1]?.id || 0;

		const addItem = {
			id: lastItemId + 1,
			text: inputValue,
			completed: false,
		};

		addTodo(addItem);
	};

	return (
		<>
			<form className="todo__form" onSubmit={submitHandler}>
				<div className="todo__editor">
					<Input
						type="text"
						className="todo__input"
						placeholder="Enter Todo List"
						ref={editorRef}
					/>
					<Button className="todo__button" type="submit">
						Add
					</Button>
				</div>
			</form>
		</>
	);
}
