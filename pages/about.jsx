import Layout from "../components/Layout/Layout";
import Translate from "react-translate-component";
import ScrollAnimation from "react-animate-on-scroll";

const AboutUs = () => (
  <Layout title="Our Short Story">
    <ScrollAnimation animateIn="fadeIn" duration={1} delay={200}>
      <div className="layout__container">
        <div className="about">
          <div className="main">
            <ScrollAnimation
              animateIn="fadeInLeft"
              duration={1}
              delay={200}
              animateOnce
            >
              <img
                src={require("../assets/img/landingDiscover/discover_ellips3.svg")}
                alt="circle"
              />
            </ScrollAnimation>
            <Translate content="about.head" component="p" />
          </div>
          <div className="about__first">
            <div className="text">
              <Translate content="about.p1" component="p" />
              <Translate content="about.p2" component="p" />
            </div>
            <div className="visual">
              <ScrollAnimation
                animateIn="fadeIn"
                duration={1}
                delay={300}
                animateOnce
              >
                <img
                  src={require("../assets/img/about/aboutlogo.svg")}
                  alt="img"
                  className="pict1"
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInRight"
                duration={1}
                delay={300}
                animateOnce
              >
                <img
                  src={require("../assets/img/landingDiscover/discover_pict1.svg")}
                  alt="img"
                  className="pict2"
                />
              </ScrollAnimation>
            </div>
          </div>

          <div className="main main--second">
            <Translate content="about.head2" component="p" />
          </div>
          <div className="about__second">
            <div className="about__cardCont">
              <ScrollAnimation
                animateIn="fadeInUp"
                duration={1}
                delay={500}
                animateOnce
                className="about__card"
              >
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
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeInUp"
                duration={1}
                delay={600}
                animateOnce
                className="about__card"
              >
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
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                duration={1}
                delay={700}
                animateOnce
                className="about__card"
              >
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
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </Layout>
);

export default AboutUs;
