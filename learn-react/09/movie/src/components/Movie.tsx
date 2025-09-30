import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";

export default function Movie() {
	return (
		<>
			<MovieHeader />
			<MovieMain />
			<MovieList title="Now Playing" movie={"now_playing"} />
			<MovieList title="Popular" movie={"popular"} />
			<MovieList title="Upcoming" movie={"up_coming"} />
		</>
	);
}
