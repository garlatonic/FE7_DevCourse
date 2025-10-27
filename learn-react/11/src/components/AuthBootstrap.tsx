import { useEffect } from "react";
import { useAuthStore } from "../stores/authStore";
import supabase from "../utils/supabase";

export default function AuthBootstrap() {
	const hydrateFromAuth = useAuthStore((state) => state.hydrateFromAuth);
	const clearAuth = useAuthStore((state) => state.clearAuth);

	// 컴포넌트가 초기화되면 실행
	useEffect(() => {
		hydrateFromAuth();
		const { data: sub } = supabase.auth.onAuthStateChange(async (event) => {
			if (event === "SIGNED_OUT") clearAuth();
		});
		return () => sub.subscription.unsubscribe();
	}, [hydrateFromAuth, clearAuth]);
	return null;
}
