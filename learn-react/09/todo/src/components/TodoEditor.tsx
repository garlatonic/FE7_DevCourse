import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "../store/store";
import { addTodo } from "../store/slice/todoSlice";

export default function TodoEditor() {
	const dispatch = useDispatch<AppDispatch>();

	const [text, setText] = useState("");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (text.trim() === "") return;
		dispatch(addTodo({ text: text }));
		setText("");
	};
	return (
		<>
			<form className="todo__form" onSubmit={handleSubmit}>
				<div className="todo__editor">
					<Input
						type="text"
						className="todo__input"
						placeholder="Enter Todo List"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					{/* input 태그에서 엔터를 치면 submit 이벤트가 발생함 */}
					<Button className="todo__button" type="submit">
						Add
					</Button>
				</div>
			</form>
		</>
	);
}
