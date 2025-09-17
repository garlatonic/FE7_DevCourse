export default function Button({
	text,
	children,
	clickHandler,
}: {
	text?: string;
	children?: React.ReactNode;
	clickHandler?: () => void;
}) {
	return (
		<>
			{/* <button>{text}</button> */}
			<button onClick={clickHandler}>{children}</button>
		</>
	);
}
