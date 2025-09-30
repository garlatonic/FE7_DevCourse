import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { ErrorBoundary } from "react-error-boundary";
import GlobalError from "./components/GlobalError";

// 런타임에 발생한 에러는 무조건 crash error가 남
// crash error = 애플리케이션이 아예 작동으 ㄹ안하는...

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ErrorBoundary fallback={<GlobalError />}>
			<App />
		</ErrorBoundary>
	</StrictMode>,
);
