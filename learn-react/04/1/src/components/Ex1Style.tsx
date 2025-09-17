interface Ex1StyleProps {
	// styled: {
	// 	fontSize: string;
	// 	color: string;
	// }
	// styled: {
	// 	[key: string]: string;
	// };
	styled: React.CSSProperties;
	// 리액트 라이브러리에 내장되어있는 타입
}

export default function Ex1Style(props: Ex1StyleProps) {
	return (
		<>
			<h1 style={props.styled}>Ex1Style Component</h1>
		</>
	);
}
