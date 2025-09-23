import { createContext } from "react";

type TodoContextType = { todos: Todo[] };
type TodoActionContextType = {
	addTodo: (text: string) => void;
	toggleTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
	updateTodo: (id: string, text: string) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);
export const TodoActionContext = createContext<TodoActionContextType | null>(
	null,
);
