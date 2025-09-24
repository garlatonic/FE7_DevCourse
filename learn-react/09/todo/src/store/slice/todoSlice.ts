import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: {
	todos: Todo[];
} = {
	todos: [],
};

const todoSlice = createSlice({
	name: "todoSlice",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<{ text: string }>) => {
			const uuid = (
				Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
			).toUpperCase();
			state.todos = [
				...state.todos,
				{
					id: uuid,
					text: action.payload.text,
					completed: false,
				},
			];
		},
		toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
			state.todos.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, completed: !todo.completed }
					: todo,
			);
		},
		deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
			state.todos.filter((todo) => todo.id !== action.payload.id);
		},
		updateTodo: (
			state,
			action: PayloadAction<{ id: string; text: string }>,
		) => {
			state.todos.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, text: action.payload.text }
					: todo,
			);
		},
	},
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } =
	todoSlice.actions;
export default todoSlice.reducer;
