import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../../stores/authStore";

// 로그인하지 않은 사용자만 접근 가능
export default function PublicOnlyRoute() {
	const location = useLocation();
	const isLoading = useAuthStore((state) => state.isLoading);
	const claims = useAuthStore((state) => state.claims);

	if (claims) {
		const to = location.state?.from.pathname ?? "/";
		return <Navigate to={to} replace />;
	}

	if (isLoading) return null;
	return <Outlet />;
}
