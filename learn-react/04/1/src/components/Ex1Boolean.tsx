export default function Ex1Boolean({ boolean }: { boolean: boolean }) {
	return (
		<>
			<h1>{boolean ? "로그인 됨" : "로그인 안됨"}</h1>
		</>
	);
}
