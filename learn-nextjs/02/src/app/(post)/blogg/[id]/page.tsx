"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function BlogDetailPage() {
	const params = useParams();
	const searchParams = useSearchParams();
	const language = searchParams.get("lang");
	return (
		<>
			<h1>
				{params.id}번째 게시글 상세 - {language}
			</h1>
		</>
	);
}
