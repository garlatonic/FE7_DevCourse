import { useEffect, useState } from "react";
import { search } from "../assets/blog/assets";
import { usePostStore } from "../stores/postStore";

export default function Search() {
	const [terms, setTerms] = useState("");
	const fetchPosts = usePostStore((state) => state.fetchPosts);

	useEffect(() => {
		// 0.5초 동안 입력을 안하면 검색
		const timeout = setTimeout(() => {
			fetchPosts("posts?title_like=" + terms);
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [fetchPosts, terms]);

	return (
		<>
			<section className="flex justify-center items-center mt-[32px]">
				<div className="w-full max-w-[430px] relative">
					<input
						type="text"
						className="border border-[#DDDDDD] w-full h-[58px] py-[12px] md:py-[18px] px-[20px] md:px-[28px] rounded-[5px] placeholder-[#5f5f5f] text-lg"
						placeholder="Search for Articles"
						value={terms}
						onChange={(e) => setTerms(e.target.value)}
					/>
					<img
						src={search}
						alt=""
						className="absolute top-1/2 right-4 -translate-y-1/2"
					/>
				</div>
			</section>
		</>
	);
}
