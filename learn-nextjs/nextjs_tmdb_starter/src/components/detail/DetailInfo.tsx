export default function DetailInfo() {
  return (
    <>
      <section className="detail">
        {/* <div className="detail-wrap">
          <div className="detail-info">
            <h2 className="detail-title">Best Game</h2>
            <ul className="detail-features">
              <li className="features-item">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
              </li>
              <li className="features-item">코미디</li>
              <li className="features-item">1h 51m</li>
            </ul>
            <p className="detail-desc">
              Based on Edgar Allan Poe's classNameic bone-chilling tale, this
              bloody story will have you sleeping with the lights on for years
              to come.
            </p>
            <ul className="detail-maker">
              <li>
                <strong>Director</strong>:<span>Chirst Michels</span>
              </li>
              <li>
                <strong>Casting</strong>:
                <span>
                  Tom Blyth•Rachel Zegler•Peter Dinklage•Jason
                  Schwartzman•Hunter Schafer
                </span>
              </li>
              <li>
                <strong>Production</strong>:<span>Studio Dragon</span>
              </li>
            </ul>
          </div>
          <div className="detail-poster">
            <Image
              src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
              alt=""
            />
          </div>
        </div> */}
        <div className="detail-wrap">
          <div className="detail-info">
            <h2 className="detail-title skeleton-list-item ui3"></h2>
            <ul className="detail-features skeleton-list-item ui4"></ul>
            <p className="skeleton-list-item ui4"></p>
            <ul className="detail-maker">
              <li className="skeleton-list-item ui5"></li>
              <li className="skeleton-list-item ui5"></li>
              <li className="skeleton-list-item ui5"></li>
            </ul>
          </div>
          <div className="detail-poster">
            <a href="#" className="skeleton-list-item ui0"></a>
          </div>
        </div>
      </section>
    </>
  );
}
