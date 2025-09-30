import { useEffect, useState } from "react";
import MovieLoaderCard from "./MovieCardLoader";
import MovieListItem from "./MovieListItem";
import { axiosInstance } from "../api/axiosInstance";
import MovieCardError from "./MovieCardError";

export default function MovieList({
	movie,
	title,
}: {
	movie: string;
	title: string;
}) {
	const [movies, setMovies] = useState<MovieType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const {
					data: { results },
				} = await axiosInstance.get(movie);
				setMovies(results);
			} catch (e) {
				setError((e instanceof Error && e.message) || "unknown error");
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			<article className="bg-black px-4 pt-4 xs:px-0">
				<section className="container mx-auto py-8 text-white">
					<span className="text-yellow-600">ONLINE STREAMING</span>
					<h2 className="text-[36px] font-bold mb-8">{title}</h2>
					{error && <MovieCardError error={error} />}
					{!error && (
						<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
							{/* 아이템 1개 */}
							{isLoading && <MovieLoaderCard />}
							{!isLoading &&
								movies.map((movie) => (
									<MovieListItem key={movie.id} {...movie} />
								))}
						</div>
					)}
				</section>
			</article>
		</>
	);
}
