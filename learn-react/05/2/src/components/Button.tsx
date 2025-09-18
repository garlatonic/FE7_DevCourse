export default function Button({
	handleClick,
	handleClick2,
}: {
	handleClick: (name: string) => void;
	handleClick2: () => void;
}) {
	return (
		<>
			{/* 아래처럼 넣으면 파싱될 때 바로 호출됨. 그래서 사용하면 안됨 */}
			{/* <button onClick={handleClick("kim")}>클릭</button> */}
			{/* 호출해야하는 핸들러에 매개변수를 전달해야한다? 아래로 */}
			<button onClick={() => handleClick("sanga")}>클릭</button>
			{/* 매개변수가 없다면 ()없이 바로 적는게 관례 */}
			<button onClick={handleClick2}>클릭</button>
		</>
	);
}
