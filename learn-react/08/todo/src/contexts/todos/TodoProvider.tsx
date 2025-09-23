import { useMemo, useState } from "react";
import { TodoActionContext, TodoContext } from "./todoContext";

export default function TodoProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (text: string) => {
		const uuid = (
			Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
		).toUpperCase();
		setTodos((todos) => [...todos, { id: uuid, text, completed: false }]);
	};
	const toggleTodo = (id: string) => {
		setTodos((todos) =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};
	const deleteTodo = (id: string) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	};
	const updateTodo = (id: string, text: string) => {
		setTodos((todos) =>
			todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo)),
		);
	};
	const memoizationProvider = useMemo(
		() => ({ addTodo, toggleTodo, deleteTodo, updateTodo }),
		[],
	);
	return (
		<>
			<TodoActionContext value={memoizationProvider}>
				<TodoContext value={{ todos }}>{children}</TodoContext>
			</TodoActionContext>
		</>
	);
}
