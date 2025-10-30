export default function DetailTrailer() {
  return (
    <>
      <section className="trailer">
        {/* <iframe
          src="https://www.youtube.com/embed/iIxkC4ap8aU?si=FDVIRTdUuTZr3DgM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            border: 0,
            width: "90%",
            maxWidth: "900px",
            aspectRatio: "16 / 9",
          }}
        ></iframe> */}
        <iframe
          className="skeleton-list-item"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            border: 0,
            width: "90%",
            maxWidth: "900px",
            aspectRatio: "16 / 9",
          }}
        ></iframe>
        {/* <img
          src="https://image.tmdb.org/t/p/original//7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg"
          style={{ width: "90%", maxWidth: "900px", height: "auto" }}
        /> */}
      </section>
    </>
  );
}
