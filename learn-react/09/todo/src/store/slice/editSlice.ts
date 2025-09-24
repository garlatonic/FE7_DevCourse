import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
	name: "editSlice",
	initialState: {
		isEdit: false,
	},
	reducers: {
		setIsEdit: (state) => {
			state.isEdit = !state.isEdit;
		},
	},
});

export const { setIsEdit } = editSlice.actions;
export default editSlice.reducer;
