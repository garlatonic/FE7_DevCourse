import { twMerge } from "tailwind-merge";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import React, { useEffect, useState } from "react";
import { useTodoStore } from "../stores/todoStore";
import { useEditStore } from "../stores/editStore";

export default React.memo(function TodoListItem({ todo }: { todo: Todo }) {
	const isEdit = useEditStore((state) => state.isEdit);
	const toggleTodo = useTodoStore((state) => state.toggleTodo);
	const deleteTodo = useTodoStore((state) => state.deleteTodo);
	const updateTodo = useTodoStore((state) => state.updateTodo);
	const setIsEdit = useEditStore((state) => state.setIsEdit);

	const [text, setText] = useState(todo.text);

	useEffect(() => {
		if (!isEdit && todo.text !== text) {
			updateTodo(todo.id, text);
		}
	}, [isEdit, text, todo.id, todo.text, updateTodo]);

	return (
		<>
			{/* 할 일이 완료되면 .todo__item--complete 추가 */}
			<li
				className={twMerge(
					"todo__item",
					todo.completed && "todo__item--complete",
				)}
			>
				{!isEdit && (
					<Checkbox
						parentClassName="todo__checkbox-group"
						type="checkbox"
						className="todo__checkbox"
						onChange={() => toggleTodo(todo.id)}
					>
						{todo.text}
					</Checkbox>
				)}
				{/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
				{isEdit && (
					<input
						type="text"
						className="todo__modify-input"
						value={text}
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
				)}
				<div className="todo__button-group">
					<Button className="todo__action-button" onClick={() => setIsEdit()}>
						<SvgPencil />
					</Button>
					<Button
						className="todo__action-button"
						onClick={() => deleteTodo(todo.id)}
					>
						<SvgClose />
					</Button>
				</div>
			</li>
		</>
	);
});
