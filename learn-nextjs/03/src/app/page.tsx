"use client";

// import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
	const router = useRouter();

	return (
		<>
			<h1 className="translate-y-1/2">홈</h1>
			{/* <a href="/docs">docs</a>
			<Link href="/docs">docs</Link> */}
			<button onClick={() => router.push("/docs")}>docs</button>
		</>
	);
}
