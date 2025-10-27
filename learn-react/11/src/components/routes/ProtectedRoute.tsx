import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../../stores/authStore";

// 로그인한 사람만 접근 가능
export default function ProtectedRoute() {
	const location = useLocation();
	const isLoading = useAuthStore((state) => state.isLoading);
	const claims = useAuthStore((state) => state.claims);

	if (!claims) {
		return <Navigate to={"/login"} replace state={{ from: location }} />;
	}

	if (isLoading) return null;
	return <Outlet />;
}
