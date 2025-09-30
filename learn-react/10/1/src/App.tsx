// 리액트 라우터를 사용하려면 route를 저장해야함
// 라우트 (Route)
// 라우트들의 집합 (Routes)

// 라우터 : 앱 전체에서 라우팅 시스템을 제공하는 컨테이너 (react-router)
// 라우트 : 특정 URL 패턴과 컴포넌트를 매핑하는 규칙을 의미

// 중첩 라우트 -> <Outlet /> 사용
// 레이아웃 라우트 -> 중첩라우트를 사용해서 레이아웃 설정하기 (공통의 레이아웃이 보이도록)
// 라우트 프리픽스 -> URL에 공통의 접두사를 붙이기
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import CEO from "./pages/CEO";
import DefaultLayout from "./layouts/DefaultLayout";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<>
			<Routes>
				{/* 레이아웃 라우트 */}
				<Route element={<DefaultLayout />}>
					<Route index element={<Navigate to="/blog"></Navigate>}></Route>
					<Route path="blog" element={<Home />} />
					{/* 중첩 라우트 */}
					{/* <Route path="about" element={<About />}> */}
					{/* 라우트 프리픽스 */}
					<Route path="about">
						{" "}
						{/* 부모가 되는 route에는 Outlet 필수 */}
						<Route path="history" element={<History />} />
						<Route path="ceo" element={<CEO />} />
					</Route>

					{/* 동적 세그먼트 */}
					{/* :~ 카멜케이스로 적으면 됨 */}
					<Route path={"team/:id/group/:groupId"} element={<Team />}></Route>

					{/* group/1 로도 접근가능하게 하고 싶을때? */}
					{/* 옵셔널 세그먼트 -> 파라미터에 ? 붙이기 */}
					{/* <Route path={"team?/:id?/group/:groupId"} element={<Team />}></Route> */}
					{/* 스플랫 : 모든 라우트를 전부 캐치하는 방법 */}
					{/* 다 통과를 못했을 때 나오는거 */}
					{/* 보통 notfound 페이지 */}
					<Route path="*" element={<NotFound />}></Route>
				</Route>
			</Routes>
		</>
	);
}
