import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store/store";
import { Provider } from "react-redux";

// 전역 상태 관리
// Context API
// Redux ToolKit (Redux VS Redux Toolkit) Redux랑 Redux Toolkit은 다름
// Redux -> 2015년도에 출시된 (자바스크립트)전역 상태 관리 라이브러리
// Redux ToolKit -> 2019년 출시 / Redux를 더 쉽게 사용하기 위한 보조도구
// Zustand
// Recoil, Mobx... 등등

// Mobx 쓰면 돔황쳐야함 (강사님 피셜)

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
