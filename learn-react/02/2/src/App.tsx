import styles from "./App.module.css";
import First from "./components/First";
import className from "classnames";
import classNames from "classnames/bind";

export default function App() {
	const isCancel = true;
	const isItalic = true;
	const cx = classNames.bind(styles);
	return (
		<>
			<h1 className={`${styles.red_c} ${isCancel ? styles.line_through : ""}`}>
				App Component
			</h1>
			{/* <First /> */}
			<h1 className={cx("red_c", { line_through: isCancel })}>App Component</h1>
			<h1 className={`primary ${isItalic ? "italic" : ""}`}>App Component</h1>
			<h1 className={className("primary", { italic: isItalic })}>
				App Component
			</h1>
		</>
	);
}
