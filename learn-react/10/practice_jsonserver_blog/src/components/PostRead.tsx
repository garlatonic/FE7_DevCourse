import { useEffect } from "react";
import { usePostStore } from "../stores/postStore";
import PostReadLoader from "./PostReadLoader";
import { format } from "date-fns";
import { useParams } from "react-router";
import { readingTime } from "reading-time-estimator";

export default function PostRead() {
	const params = useParams();
	const post = usePostStore((state) => state.post);
	const fetchPost = usePostStore((state) => state.fetchPost);
	const isLoadingPost = usePostStore((state) => state.isLoadingPost);

	const { text } = readingTime(post?.desc || "", 1);

	useEffect(() => {
		fetchPost(`posts/${params.id}`);
		return () => {
			usePostStore.setState({ post: null, isLoadingPost: true, errorPost: "" });
		};
	}, [fetchPost, params.id]);

	if (isLoadingPost) return <PostReadLoader />;
	return (
		<>
			{/* 이미지 */}
			<section className="max-w-[800px] mx-auto">
				<strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-[12px] sm:text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
					{post?.category}
				</strong>
				<h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold">
					{post?.title}
				</h3>
				<p className="text-sm text-[#515151] mb-[18px]">
					{post && format(post?.createdAt, "yyyy-MM-dd")} {text}
				</p>
				<img
					src={post?.thumbnail}
					alt="dummy"
					className="object-cover w-full max-h-[278px] rounded-md"
				/>
				<div className="mt-4 flex items-center gap-[14px]">
					<img
						src={post?.thumbnailAvatar}
						alt=""
						className="rounded-s-full max-w-10"
					/>
					<strong className="text-sm">{post?.writer}</strong>
				</div>
			</section>
			{/* 본문 */}
			<section className="max-w-[800px] mx-auto text-lg sm:text-xl text-[#434343] mt-5 [&>p]:mb-10 mb-10 ">
				{post?.desc}
			</section>
		</>
	);
}
