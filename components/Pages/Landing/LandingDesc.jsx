import { Link as ScrollLink } from "react-scroll";
import { CustomButton } from "../../CustomComponents/CustomComponents";
import Translate from "react-translate-component";
import ScrollAnimation from "react-animate-on-scroll";

const LandingDesc = () => (
  <div className="layout__container layout__container--grey">
    <div className="landingDesc">
      <Translate component="p" className="main" content="landingDesc.head" />
      <div className="landingDesc__cont">
        <div className="landingDesc__head">
          <div className="text">
            <p className="main">Hapmas Data Engine</p>
            <Translate
              component="p"
              className="desc"
              content="landingDesc.p1"
            />
            <Translate
              component="p"
              className="desc"
              content="landingDesc.p2"
            />
          </div>
          <div className="visual">
            <img src={require("../../../assets/img/landingDesc/solution_pict1.svg")} alt="solutionImg" />
          </div>
        </div>
        <div className="landingDesc__cardCont">

        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} className="landingDesc__card">
            <img
              src={require("../../../assets/img/landingDesc/solution_ticket.svg")}
              alt="cardIcon"
              className="icon"
            />
            <Translate
              component="p"
              className="main"
              content="landingDesc.card1Title"
              unsafe={true}
            />
            <Translate
              component="p"
              className="desc"
              content="landingDesc.card1Desc"
            />
            <Translate
              component="div"
              className="link link--blue"
              content="landingDesc.card1Link"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" duration={1} delay={300} className="landingDesc__card">
            <img
              src={require("../../../assets/img/landingDesc/solution_search.svg")}
              alt="cardIcon"
              className="icon"
            />
             <Translate
              component="p"
              className="main"
              content="landingDesc.card2Title"
              unsafe={true}
            />
            <Translate
              component="p"
              className="desc"
              content="landingDesc.card2Desc"
            />
            <Translate
              component="div"
              className="link link--blue"
              content="landingDesc.card2Link"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" duration={1} delay={400} className="landingDesc__card">
            <img
              src={require("../../../assets/img/landingDesc/solution_crane.svg")}
              alt="cardIcon"
              className="icon"
            />
             <Translate
              component="p"
              className="main"
              content="landingDesc.card3Title"
              unsafe={true}
            />
            <Translate
              component="p"
              className="desc"
              content="landingDesc.card3Desc"
            />
            <Translate
              component="div"
              className="link link--blue"
              content="landingDesc.card3Link"
            />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" duration={1} delay={500} className="landingDesc__card">
            <img
              src={require("../../../assets/img/landingDesc/solution_analytic.svg")}
              alt="cardIcon"
              className="icon"
            />
             <Translate
              component="p"
              className="main"
              content="landingDesc.card4Title"
              unsafe={true}
            />
            <Translate
              component="p"
              className="desc"
              content="landingDesc.card4Desc"
            />
            <Translate
              component="div"
              className="link link--blue"
              content="landingDesc.card4Link"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" duration={1} delay={600} className="landingDesc__card">
            <img
              src={require("../../../assets/img/landingDesc/solution_marketing.svg")}
              alt="cardIcon"
              className="icon"
            />
            <Translate
              component="p"
              className="main"
              content="landingDesc.card5Title"
              unsafe={true}
            />
            <Translate
              component="p"
              className="desc"
              content="landingDesc.card5Desc"
            />
            <Translate
              component="div"
              className="link link--blue"
              content="landingDesc.card5Link"
            />
         </ScrollAnimation>

          <div className="landingDesc__card landingDesc__card--btn">
            <img
              src={require("../../../assets/img/landingDesc/desc_btn.svg")}
              alt="haha"
              className="landingDesc__btnImage"
            />
            <ScrollLink
              to="landing-contact"
              spy={true}
              smooth={true}
              duration={2000}
            >
              <CustomButton
                btnText={
                  <Translate content="navBar.navContact" />
                }
                btnType="button"
                btnColor="blue"
                className="landingDesc__btn"
              />
            </ScrollLink>
            <img
              src={require("../../../assets/img/landingHero/hero_dots.svg")}
              alt="dots"
              className="landingDesc__btnDots"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingDesc;
