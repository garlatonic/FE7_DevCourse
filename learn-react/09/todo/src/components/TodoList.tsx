import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function TodoList() {
	const todos = useSelector((state: RootState) => state.todo.todos);
	return (
		<>
			<ul className="todo__list">
				{todos.length === 0 && <TodoListEmpty />}
				{/* 할 일 목록이 없을 때  */}
				{todos.map((todo) => (
					<TodoListItem key={todo.id} todo={todo} />
				))}
				{/* 할 일 목록이 있을 때 */}
			</ul>
		</>
	);
}
