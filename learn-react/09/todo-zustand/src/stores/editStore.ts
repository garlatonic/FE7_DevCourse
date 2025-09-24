import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface EditStore {
	isEdit: boolean;
	setIsEdit: () => void;
}

export const useEditStore = create<EditStore>()(
	immer((set) => ({
		isEdit: false,
		setIsEdit: () => {
			set((state) => {
				state.isEdit = !state.isEdit;
			});
		},
	})),
);
