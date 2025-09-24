import MovieHeader from "./MovieHeader";
import MovieLoader from "./MovieLoader";
import MovieMain from "./MovieMain";

const url = {
	nowPlaying:
		"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
	upComing: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
	popular:
		"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
};

export default function Movie() {
	return (
		<>
			<MovieHeader />
			<MovieMain />
			<MovieLoader title="Now Playing" url={url.nowPlaying} />
			<MovieLoader title="Popular" url={url.popular} />
			<MovieLoader title="Upcoming" url={url.upComing} />
		</>
	);
}
