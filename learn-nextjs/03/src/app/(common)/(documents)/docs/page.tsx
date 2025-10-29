"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GuidePage() {
	// redirect("/docs/guides"); // 바로 이 페이지로 이동시켜버림
	const router = useRouter();
	useEffect(() => {
		router.push("/docs/guides");
	}, [router]);
	return (
		<>
			<h1>가이드 홈</h1>
		</>
	);
}
