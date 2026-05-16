const churchLogo = new URL('./assets/logo.png', import.meta.url)

const TopHeader = () => {
  return (
    <>
      <div className="header-container fade-in">
        <div className="container mt-3">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-6">
              <img
                src={churchLogo}
                alt="Primera Iglesia Bautista de Jinotepe"
                title="Primera Iglesia Bautista de Jinotepe - created by Alvison Hunter"
                aria-hidden="true"
                className="header-logo"
              />
            </div>
            <div className="col-12 col-md-6">
              <article>
                <h1 className="header-title">
                  <small className="church lead d-block mb-2">
                    Song Planning for Worship Teams
                  </small>
                  <span className="gradient-text">ZamarAvad Deck</span>
                </h1>
                <p className="header-description">
                  This application coordinates church worship services by
                  organizing song lists, chord sheets, and practice videos. As a
                  worship planning tool for singers and servants, it helps
                  praise teams prepare well for every service.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="accent-line"></div>
      </div>
    </>
  )
}

export default TopHeader
