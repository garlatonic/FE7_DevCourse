export default async function CommentPage({
	params,
}: {
	params: Promise<{ id: string; commentId: string }>;
}) {
	const { id, commentId } = await params;
	return (
		<>
			<h1>
				{id}번째 게시물의 {commentId}번째 댓글
			</h1>
		</>
	);
}
