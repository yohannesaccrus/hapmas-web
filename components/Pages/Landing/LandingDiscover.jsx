import Translate from "react-translate-component";

const LandingDiscover = () => (
  <div className="layout__container">
    <div className="landingDiscover">
      <Translate
        component="div"
        className="head"
        content="landingDiscover.head"
      />
      <div className="landingDiscover__cont">
        <div className="landingDiscover__card">
          <div className="landingDiscover__visual">
            <img src="/static/index/discover_pict1.webp" alt="discover" />
          </div>
          <div className="landingDiscover__text">
            <div className="main">
              <img src="/static/index/discover_ellips1.webp" alt="circle" />
              <Translate
                component="p"
                className="title"
                content="landingDiscover.firstMain"
              />
              <Translate
                component="p"
                className="desc"
                content="landingDiscover.firstDesc"
              />
            </div>
          </div>
        </div>
        <div className="landingDiscover__card">
          <div className="landingDiscover__visual">
            <img src="/static/index/discover_pict2.webp" alt="discover" />
          </div>
          <div className="landingDiscover__text">
            <div className="main">
              <img src="/static/index/discover_ellips2.webp" alt="circle" />
              <Translate
                component="p"
                className="title"
                content="landingDiscover.secondMain"
              />
              <Translate
                component="p"
                className="desc"
                content="landingDiscover.secondDesc"
              />
            </div>
          </div>
        </div>
        <div className="landingDiscover__card">
          <div className="landingDiscover__visual">
            <img src="/static/index/discover_pict3.webp" alt="discover" />
          </div>
          <div className="landingDiscover__text">
            <div className="main">
              <img src="/static/index/discover_ellips3.webp" alt="circle" />
              <Translate
                component="p"
                className="title"
                content="landingDiscover.thirdMain"
              />
              <Translate
                component="p"
                className="desc"
                content="landingDiscover.thirdDesc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingDiscover;
