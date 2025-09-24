import { create } from "zustand";
import { combine } from "zustand/middleware";

interface ConfigureStore {
	theme: string;
	setIsDark: () => void;
	setIsLight: () => void;
}

// 미들웨어를 사용할 경우 순서
// combine을 먼저 쓰고
// immer를 쓰고
// persit를 쓰고
// devtools를 쓰고
// subscribeWithSelector 사용
// 결론은 subscribeWithSelector(devtools(persit(immer(combine()))))

export const useConfigureStore = create<ConfigureStore>()(
	// 상태와 상태업데이트 함수를 구분짓기위한 함수 combine
	// combine({제공할 상태}, {상태 업데이트})
	combine({ theme: "dark" }, (set) => ({
		setIsDark: () => set({ theme: "dark" }),
		setIsLight: () => set({ theme: "light" }),
	})),
);
