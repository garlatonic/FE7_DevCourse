import MovieLoaderCard from "./MovieCardLoader";
import MovieListItem from "./MovieListItem";
import useAxios from "../hooks/useAxios";

export default function MovieList({ url }: { url: string }) {
	const { data: movieList, isLoading, error } = useAxios(url);

	return (
		<>
			<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
				{isLoading && <MovieLoaderCard />}
				{!isLoading && (
					<>
						{movieList?.map((movie: MovieType) => (
							<MovieListItem
								key={movie.id}
								poster_path={movie.poster_path}
								overview={movie.overview}
								title={movie.title}
								vote_average={movie.vote_average}
							/>
						))}
					</>
				)}
			</div>
		</>
	);
}
