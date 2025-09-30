import { format } from "date-fns";
import { star } from "../assets/movies/assets";

export default function MovieListItem({
	title,
	vote_average,
	release_date,
	poster_path,
	overview,
}: MovieType) {
	return (
		<>
			<div>
				<img
					src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
					alt={overview}
					className="rounded-md w-full"
				/>
				<div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
					<h4 className="line-clamp-1">{title}</h4>
				</div>
				<div className="flex justify-between items-center text-sm text-gray-200">
					<div className="flex items-center gap-2 font-bold">
						<img
							src={star}
							alt="star"
							width={18}
							height={18}
							className="object-contain"
						/>
						<span className="text-yellow-500">
							{(vote_average / 2)?.toFixed(1)}
						</span>
					</div>
					<span className="text-yellow-500 font-bold">
						{format(new Date(release_date), "MM.DD")}
					</span>
				</div>
			</div>
		</>
	);
}
