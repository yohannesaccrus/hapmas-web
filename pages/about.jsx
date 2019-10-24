import Layout from "../components/Layout/Layout";
import Translate from "react-translate-component";

const AboutUs = () => (
  <Layout title="Our Short Story">
    <div className="layout__container">
      <div className="about">
        <div className="main">
          <img src={require("../assets/img/landingDiscover/discover_ellips3.svg")} alt="circle" />
          <Translate content="about.head" component="p" />
        </div>
        <div className="about__first">
          <div className="text">
            <Translate content="about.p1" component="p" />
            <Translate content="about.p2" component="p" />
          </div>
          <div className="visual">
            <img src={require("../assets/img/about/aboutlogo.svg")} alt="img" className="pict1" />
            <img
              src={require("../assets/img/landingDiscover/discover_pict1.svg")}
              alt="img"
              className="pict2"
            />
          </div>
        </div>

        <div className="main main--second">
          <Translate content="about.head2" component="p" />
        </div>
        <div className="about__second">
          <div className="about__cardCont">
            <div className="about__card">
              <img src="http://bit.ly/2pj7pB0" alt="cardImg" />
              <div className="text">
                <Translate
                  content="about.card1Title"
                  className="title"
                  component="p"
                />
                <Translate
                  content="about.card1Desc"
                  className="desc"
                  component="p"
                />
              </div>
              <img
                src={require("../assets/img/landingDiscover/discover_pict1.svg")}
                alt="img"
                className="illust"
              />
            </div>
            <div className="about__card">
              <img src="http://bit.ly/2nN9g0t" alt="cardImg" />
              <div className="text">
              <Translate
                  content="about.card2Title"
                  className="title"
                  component="p"
                />
                <Translate
                  content="about.card2Desc"
                  className="desc"
                  component="p"
                />
              </div>
              <img
               src={require("../assets/img/landingDiscover/discover_pict2.svg")}
                alt="img"
                className="illust"
              />
            </div>
            <div className="about__card">
              <img src="http://bit.ly/33BPCDF" alt="cardImg" />
              <div className="text">
              <Translate
                  content="about.card3Title"
                  className="title"
                  component="p"
                />
                <Translate
                  content="about.card3Desc"
                  className="desc"
                  component="p"
                />
              </div>
              <img
                src={require("../assets/img/landingDiscover/discover_pict3.svg")}
                alt="img"
                className="illust"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutUs;
