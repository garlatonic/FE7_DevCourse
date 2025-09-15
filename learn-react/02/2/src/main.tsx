import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// main.tsx에 css 다 넣기
import "../src/styles/index.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
