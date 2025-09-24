import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface TodoStore {
	todos: Todo[];
	addTodo: (text: string) => void;
	toggleTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
	updateTodo: (td: string, text: string) => void;
	resetIfTodo:() => void;
}

export const useTodoStore = create<TodoStore>()(
	persist(
		immer(
			// 위에서 제네릭으로 안 받아와져서 타입 단언을 해야한다.
			combine({ todos: [] as Todo[] }, (set, get) => ({
				addTodo: (text) => {
					set((state) => {
						const uuid = (
							Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
						).toUpperCase();
						state.todos = [
							...state.todos,
							{ id: uuid, text, completed: false },
						];
					});
				},
				toggleTodo: (id) => {
					set((state) => {
						state.todos = state.todos.map((todo) =>
							todo.id === id ? { ...todo, completed: !todo.completed } : todo,
						);
					});
				},
				deleteTodo: (id) => {
					set((state) => {
						state.todos = state.todos.filter((todo) => todo.id !== id);
					});
				},
				updateTodo: (id, text) => {
					set((state) => {
						state.todos = state.todos.map((todo) =>
							todo.id === id ? { ...todo, text } : todo,
						);
					});
				},
				resetIfTodo: () => {
					// todo 3개 이상일 때만 초기화하는 기능
					if (get().todos.length >= 3) {
						// 현재 상태값을 가져올 때 get()
						set((state) => {
							state.todos = [];
						});
					}
				},
			})),
		),
		{ name: "todo-store" },
	),
);
