import { createContext, useState } from "react";
import Page from "./components/Page";
import CountOutsideDisplay from "./components/CountOutsideDisplay";
import CounterProvider from "./contexts/counter/CounterProvider";

export default function App() {
	return (
		<>
			<CounterProvider>
				<Page />
				<CountOutsideDisplay />
			</CounterProvider>
		</>
	);
}
