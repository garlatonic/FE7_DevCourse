import Todo from "./components/Todo";
import TodoProvider from "./contexts/todos/TodoProvider";

export default function App() {
	return (
		<>
			<TodoProvider>
				<Todo />
			</TodoProvider>
		</>
	);
}
