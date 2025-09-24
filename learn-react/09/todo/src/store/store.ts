import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";
import editReducer from "./slice/editSlice";

export const store = configureStore({
	reducer: {
		todo: todoReducer,
		edit: editReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
