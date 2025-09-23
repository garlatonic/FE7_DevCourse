import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counterSlice", // 파일 이름으로 이름 지어주는게 관례
	initialState: {
		value: 0,
	},
	reducers: {
		// 항상 함수형태. 상태값을 바꿀 수 있는 로직이 들어가야함
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		reset: (state) => {
			state.value = 0;
		},
		incrementAmount: (state, action: PayloadAction<{ amount: number }>) => {
			state.value += action.payload.amount;
		},
	},
});

export const { increment, decrement, reset, incrementAmount } =
	counterSlice.actions;
export default counterSlice.reducer;
