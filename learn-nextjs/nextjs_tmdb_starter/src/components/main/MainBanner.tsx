export default function MainBanner() {
  return (
    <>
      <section className="release">
        <div
          className="release-item"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w500/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg')`,
          }}
        >
          <div className="release__text">
            <strong className="release__category">NEW RELEASE</strong>
            <h2 className="release__title">Soviet : The Cold War</h2>
            <p className="release__desc">
              Her senses grow sharper, her thinking clearer, and for the first
              time in her life she feels herself fully in control. By the age of
              sixteen, she`s competing for the U.S.
            </p>
            <button className="release__btn">자세히보기</button>
          </div>
        </div>
      </section>
    </>
  );
}
