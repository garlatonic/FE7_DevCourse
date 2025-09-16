import light from "./assets/images/thunder.jpg";

export default function PublishingImage() {
	return (
		<>
			{/* 일반적으로 그냥 상대경로로 작성했을 때 개발모드에서만 잘 보이는 경우가 이슴 */}
			{/* run dev, run preview 둘다 비교해봐야함 */}
			{/* public 폴더는 번들러 되지않고 src 폴더는 번들러가 진행됨 */}
			{/* 그래서 src에 파일 넣을 경우 import를 통해서만 정상적으로 접근이 가능함 */}
			<h1>App Component</h1>
			<img src={light} />
			<div
				style={{
					width: "300px",
					height: "197px",
					background: `url(${light}) no-repeat 50%/100%`,
				}}
			></div>
		</>
	);
}
