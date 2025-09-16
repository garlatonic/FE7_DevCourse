// import styled from "styled-components";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { button } from "./css/style.css";

export default function App() {
	// styled.태그명`스타일 입력`
	// const HelloWorld = styled.h1`
	// 	color: red;
	// 	text-decoration: underline;
	// 	&:hover {
	// 		color: blue;
	// 	}
	// `;
	const Button = styled.button`
		padding: 32px;
		background-color: hotpink;
		font-size: 24px;
		border-radius: 4px;
		color: black;
		font-weight: bold;
		&:hover {
			color: white;
		}
	`;

	const colorWhite = "white";

	return (
		<>
			{/* <HelloWorld>App Component</HelloWorld> */}
			<div
				className={css`
					padding: 32px;
					background-color: hotpink;
					font-size: 24px;
					border-radius: 4px;
					&:hover {
						color: ${colorWhite};
					}
				`}
			>
				Hover to change color.
			</div>
			<Button>버튼</Button>
      <button className={button}>버튼</button>
		</>
	);
}
