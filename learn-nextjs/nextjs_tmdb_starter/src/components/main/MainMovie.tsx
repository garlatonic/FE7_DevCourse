import Link from "next/link";
import "swiper/css";
import MovieList from "../movie/MovieList";

export default function MainMovie() {
  return (
    <>
      <section className="movie">
        <h3 className="movie-category">Now Movies</h3>
        <h4 className="movie-subtext">
          상영중인 영화 <Link href="/movie/now_playing">더보기</Link>
        </h4>
        <div className="movie-list">
          {/* <div className="movie-list__item">
            <Link href="/detail/1" className="skeleton-list-item ui0"></Link>
          </div> */}
          <MovieList />
        </div>
      </section>
    </>
  );
}
