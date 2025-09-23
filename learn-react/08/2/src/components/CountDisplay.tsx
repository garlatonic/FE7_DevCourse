import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function CountDisplay() {
	const count = useSelector((state: RootState) => state.count.value);
	const theme = useSelector((state: RootState) => state.configure.theme);
	return (
		<>
			<h1>CountDisplay : {count}</h1>
			<h1>ThemeDisplay : {theme}</h1>
		</>
	);
}
