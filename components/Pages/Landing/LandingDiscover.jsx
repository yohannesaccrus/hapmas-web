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
            <img src={require("../../../assets/img/landingDiscover/discover_pict1.svg")} alt="discover" />
          </div>
          <div className="landingDiscover__text">
            <div className="main">
              <img src={require("../../../assets/img/landingDiscover/discover_ellips1.svg")} alt="circle" />
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
            <img src={require("../../../assets/img/landingDiscover/discover_pict2.svg")} alt="discover" />
          </div>
          <div className="landingDiscover__text">
            <div className="main">
              <img src={require("../../../assets/img/landingDiscover/discover_ellips2.svg")} alt="circle" />
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
            <img src={require("../../../assets/img/landingDiscover/discover_pict3.svg")} alt="discover" />
          </div>
          <div className="landingDiscover__text">
            <div className="main">
              <img src={require("../../../assets/img/landingDiscover/discover_ellips3.svg")} alt="circle" />
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
