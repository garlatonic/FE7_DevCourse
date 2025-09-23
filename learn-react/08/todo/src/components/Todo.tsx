import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
	return (
		<>
			<div className="todo">
				<TodoHeader />
				{/* 할 일 등록  */}
				<TodoEditor />
				{/* 할 일 목록  */}
				<TodoList />
			</div>
		</>
	);
}
