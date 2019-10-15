import { Link as ScrollLink } from "react-scroll";
import { CustomButton } from "../../CustomComponents/CustomComponents";
import Translate from "react-translate-component";

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
            <img src="/static/index/solution_pict1.webp" alt="solutionImg" />
          </div>
        </div>
        <div className="landingDesc__cardCont">
          <div className="landingDesc__card">
            <img
              src="/static/index/solution_ticket.webp"
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
          </div>

          <div className="landingDesc__card">
            <img
              src="/static/index/solution_search.webp"
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
          </div>

          <div className="landingDesc__card">
            <img
              src="/static/index/solution_crane.webp"
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
          </div>

          <div className="landingDesc__card">
            <img
              src="/static/index/solution_analytic.webp"
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
          </div>

          <div className="landingDesc__card">
            <img
              src="/static/index/solution_marketing.webp"
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
          </div>

          <div className="landingDesc__card landingDesc__card--btn">
            <img
              src="/static/index/desc_btn.webp"
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
              src="/static/index/hero_dots.webp"
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
