import { formDate } from "../_helper/utils";

export default async function PostPage({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ lang: string }>;
}) {
	const { id } = await params;
	const { lang } = await searchParams;
	const date = new Date();
	return (
		<>
			<h1>
				{id}번째 게시글 - {lang}
			</h1>
			<p>{formDate(date)}</p>
		</>
	);
}
