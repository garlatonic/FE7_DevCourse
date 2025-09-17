export default function Ex1Function({ func }: { func: () => void }) {
	return (
		<>
			<button onClick={func}>버튼</button>
		</>
	);
}
