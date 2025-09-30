import { format } from "date-fns";
import { Link } from "react-router";
import { readingTime } from "reading-time-estimator";

export default function PostListItem({
	title,
	category,
	desc,
	thumbnail,
	thumbnailAvatar,
	writer,
	createdAt,
}: Post) {
	const { text } = readingTime(desc, 1); // 1분당 ~글자를 읽는다

	return (
		<>
			<Link to="/read/1">
				<article>
					<img
						src={thumbnail}
						alt="dummy"
						className="object-cover w-full aspect-[16/9]"
					/>
					<div>
						<strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-[12px] sm:text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
							{category}
						</strong>
						<h3 className="text-lg sm:text-[20px] md:text-[24px] font-bold mb-[12px]">
							{title}
						</h3>
						<p className="text-[#515151]">
							{format(createdAt, "yyyy-MM-dd")} • {text}
						</p>
						<p className="mt-[15px] text-[#434343]">{desc}</p>
						<div className="mt-4 flex items-center gap-[14px]">
							<img
								src={thumbnailAvatar}
								alt=""
								className="rounded-s-full max-w-10"
							/>
							<strong className="text-sm">{writer}</strong>
						</div>
					</div>
				</article>
			</Link>
		</>
	);
}
