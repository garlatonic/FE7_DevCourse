import MovieCardError from "./MovieCardError";

export default function MovieError({ title }: { title: string }) {
  return (
    <>
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>
          <MovieCardError />
        </section>
      </article>
    </>
  );
}
