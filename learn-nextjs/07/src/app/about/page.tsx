import Link from "next/link";

async function getRandomNumber() {
	const res = await fetch("http://localhost:4000/random", {
		cache: "no-store", // 데이터 캐싱을 사용하지 않겠다~
	});
	const randomNum = await res.json();
	return randomNum;
}

export default async function AboutPage() {
	const date = new Date().toLocaleTimeString("ko-KR");
	const randomNum = await getRandomNumber();
	return (
		<>
			<h1>AboutPage Component : {date}</h1>
			<h1>AboutPage Component : {randomNum}</h1>
			<Link href={"/"}>Home</Link>
		</>
	);
}
