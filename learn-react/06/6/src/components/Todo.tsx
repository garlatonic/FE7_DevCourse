import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
	const [listItem, setListItem] = useState<Todo[]>([]);

	// 추가하는 이벤트
	const addTodo = (addItem: Todo) =>
		setListItem((listItem) => [...listItem, addItem]);

	// 수정 / 할일 완료 이벤트
	const updateTodo = (
		targetId: number,
		updateText: string,
		updateCompleted: boolean,
	) => {
		setListItem((prev) =>
			prev.map((item) =>
				item.id === targetId
					? { ...item, text: updateText, completed: updateCompleted }
					: item,
			),
		);
	};

	const deleteTodo = (targetId: number) => {
		setListItem((prev) => prev.filter((item) => item.id !== targetId));
	};

	return (
		<>
			<div className="todo">
				<TodoHeader />
				{/* 할 일 등록  */}
				<TodoEditor listItem={listItem} addTodo={addTodo} />
				{/* 할 일 목록  */}
				<TodoList
					listItem={listItem}
					updateTodo={updateTodo}
					deleteTodo={deleteTodo}
				/>
			</div>
		</>
	);
}
