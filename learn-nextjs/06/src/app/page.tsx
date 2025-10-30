// Next.JS에서 데이터 패칭을 할 떄?
// axios 안씀 tanstackquery 안써요 SWR 안써도돼요
// fetch만 쓰면 댐 랼루 << 웹표준 API에서 제공하는 함수 - 웹브라우저에서만 사용 가능
// axios, 등등은 클라이언트 전용 함수
// Next.JS 팀이 fetch() 함수를 확장하여 Next.JS의 시스템이 녹아들어질 수 있도록 확장하여 제공

// 즉 내가 알고이;ㅆ던 기존 fetch랑 다름
// 서버컴포넌트에서는 무족권 fetch

export default async function Page() {
	const res = await fetch("http://localhost:4000/random");
	const number = await res.json();

	return (
		<>
			<h1>{number}</h1>
		</>
	);
}
