import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Claims } from "../types/user";
import type { Profile } from "../types/profile";
import supabase from "../utils/supabase";

type AuthStore = {
	isLoading: boolean; // 로딩 상태
	claims: Claims; // 사용자 정보
	setClaims: (c: Claims) => void;
	profile: Profile | null; // profiles 테이블의 데이터
	setProfile: (p: Profile) => void;
	hydrateFromAuth: () => void;
	clearAuth: () => void;
};

export const useAuthStore = create<AuthStore>()(
	devtools(
		persist(
			immer((set) => ({
				isLoading: true,
				claims: null,
				setClaims: (c: Claims) =>
					set((state) => {
						state.claims = c;
					}),
				profile: null,
				setProfile: (p: Profile | null) =>
					set((state) => {
						state.profile = p;
					}),
				hydrateFromAuth: async () => {
					set({ isLoading: true });
					// 1. 클레임 가져오기
					const { data, error } = await supabase.auth.getClaims();
					if (error) {
						// 세션 없음 or 초기화 전일 수도 있음
						set({ claims: null, profile: null, isLoading: false });
						return;
					}
					const claims = data?.claims as Claims | null;
					set({ claims: claims });

					// 2. 프로필 조회
					if (claims?.sub) {
						const { data: profiles, error: profilesError } = await supabase
							.from("profiles")
							.select("*")
							.eq("id", claims?.sub)
							.single();
						if (profilesError) {
							set({ claims: null, profile: null, isLoading: false });
							return;
						}
						set({ profile: profiles ?? null });
					}

					set({ isLoading: false });
				},
				clearAuth: () => {
					set((state) => {
						state.claims = null;
						state.profile = null;
					});
				},
			})),
			{ name: "auth-store" },
		),
	),
);
