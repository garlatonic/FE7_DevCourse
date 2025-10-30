import { revalidatePath, revalidateTag } from "next/cache";
import Link from "next/link";

// export const dynamic = "force-dynamic";
// export const revalidate = 0; // 재검증 0초
// export const revalidate = 1; // 재검증 1초 => ISR 방식

async function getRandomNumber() {
	const res = await fetch("http://localhost:4000/random", {
		// cache: "no-store", // 데이터 캐싱을 사용하지 않겠다~
		cache: "force-cache",
		next: {
			tags: ["random", "number", "num"],
		},
	});
	const randomNum = await res.json();
	return randomNum;
}

export async function generateMetadata() {
	const randomNum = await getRandomNumber();
	return {
		title: `${randomNum}`,
	};
}

const handle = async () => {
	"use server";
	revalidatePath("/");
	revalidateTag("random", "max");
};

export default async function Page() {
	const date = new Date().toLocaleTimeString("ko-KR");
	const randomNum = await getRandomNumber();
	return (
		<>
			<h1>Page Component : {date}</h1>
			<h1>Page Component : {randomNum}</h1>
			<Link href={"/about"} prefetch={true}>
				About
			</Link>
			<form action={handle}>
				<button>초기화</button>
			</form>
		</>
	);
}
