import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";

export default function TodoList({
	listItem,
	updateTodo,
	deleteTodo,
}: {
	listItem: Todo[];
	updateTodo: (
		targetId: number,
		updateText: string,
		updateCompleted: boolean,
	) => void;
	deleteTodo: (targetId: number) => void;
}) {
	return (
		<>
			<ul className="todo__list">
				{listItem.length > 0 && (
					<>
						{/* 할 일 목록이 있을 때 */}
						{listItem.map((item) => (
							<TodoListItem
								key={item.id}
								item={item}
								updateTodo={updateTodo}
								deleteTodo={deleteTodo}
							/>
						))}
					</>
				)}
				{listItem.length === 0 && (
					<>
						{/* 할 일 목록이 없을 때  */}
						<TodoListEmpty />
					</>
				)}
			</ul>
		</>
	);
}
