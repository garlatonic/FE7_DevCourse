import { twMerge } from "tailwind-merge";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, type AppDispatch } from "../store/store";
import { toggleTodo, deleteTodo, updateTodo } from "../store/slice/todoSlice";
import { setIsEdit } from "../store/slice/editSlice";

export default React.memo(function TodoListItem({ todo }: { todo: Todo }) {
	const isEdit = useSelector((state: RootState) => state.edit.isEdit);
	const dispatch = useDispatch<AppDispatch>();

	const [text, setText] = useState(todo.text);

	useEffect(() => {
		if (!isEdit && todo.text !== text) {
			dispatch(updateTodo({ id: todo.id, text: text }));
		}
	}, [dispatch, isEdit, text, todo.id, todo.text]);

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
						onChange={() => dispatch(toggleTodo({ id: todo.id }))}
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
					<Button
						className="todo__action-button"
						onClick={() => dispatch(setIsEdit())}
					>
						<SvgPencil />
					</Button>
					<Button
						className="todo__action-button"
						onClick={() => dispatch(deleteTodo({ id: todo.id }))}
					>
						<SvgClose />
					</Button>
				</div>
			</li>
		</>
	);
});
