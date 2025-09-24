// use**Store // 이렇게 작성하는게 관례

import { create } from "zustand";
import {
	createJSONStorage,
	devtools,
	persist,
	subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// 커스텀 훅  -> use***

type CounterStore = {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
	incrementByAmount: (value: number) => void;
};

// create 옆에 타입을 지정할 때는 ()를 붙여야함
// middlewares 중 immer <- 불변성을 보장해줌
export const useCounterStore = create<CounterStore>()(
	subscribeWithSelector(
		devtools(
			persist(
				immer((set) => ({
					count: 0,
					// increment: () => set((state) => ({ count: state.count + 1 })), // set은 zustand에서 제공하는 setter
					// decrement: () => set((state) => ({ count: state.count - 1 })),
					// reset: () => set({ count: 0 }),
					// incrementByAmount: (value) => {
					//   set((state) => ({ count: state.count + value }));
					// }, // 함수에 전달할 매개변수는 setter말고 앞에

					// immer 를 쓰면 이로케 깔꼬롬하게 사용가능
					increment: () =>
						set((state) => {
							state.count += 1;
						}),
					decrement: () =>
						set((state) => {
							state.count -= 1;
						}),
					reset: () => set({ count: 0 }),
					incrementByAmount: (value) =>
						set((state) => {
							state.count += value;
						}),
				})),
				{
					name: "counter-store",
					storage: createJSONStorage(() => sessionStorage),
				},
			),
			{ trace: true },
		),
	),
);
