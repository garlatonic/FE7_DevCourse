import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import Write from "./pages/Write";
import About from "./pages/About";
import Read from "./pages/Read";

export default function App() {
	return (
		<>
			<Routes>
				{/* 레이아웃 라우트 */}
				<Route element={<DefaultLayout />}>
					{/* 기본라우트 */}
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="write" element={<Write />} />
					{/* 동적 세그먼트 */}
					<Route path="read/:id" element={<Read />} />
				</Route>
			</Routes>
		</>
	);
}
