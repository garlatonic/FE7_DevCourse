import MovieList from "./MovieList";

export default function MovieLoader({
	title,
	url,
}: {
	title: string;
	url: string;
}) {
	return (
		<>
			<article className="bg-black py-10 px-4 xs:px-0">
				<section className="container mx-auto text-white">
					<span className="text-yellow-600">ONLINE STREAMING</span>
					<h2 className="text-[36px] font-bold mb-8">{title}</h2>
					<MovieList url={url} />
				</section>
			</article>
		</>
	);
}
