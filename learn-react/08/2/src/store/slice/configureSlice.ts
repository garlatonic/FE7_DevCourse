import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
	name: "configureSlice",
	initialState: {
		theme: "dark",
	},
	reducers: {
		setIsDark: (state) => {
			state.theme = "dark";
		},
		setIsLight: (state) => {
			state.theme = "light";
		},
	},
});

export const { setIsDark, setIsLight } = configureSlice.actions;
export default configureSlice.reducer;
