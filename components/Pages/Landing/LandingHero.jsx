import { Link as ScrollLink } from "react-scroll";
import { CustomButton } from "../../CustomComponents/CustomComponents";
import Translate from "react-translate-component";

const LandingHero = () => (
  <div className="layout__container">
    <div className="landingHero">
      <div className="landingHero__text">
        <Translate
          content="landingHero.tagLine"
          component="p"
          className="main"
          unsafe={true}
        />

        <Translate
          content="landingHero.info"
          component="div"
          className="sub"
          unsafe={true}
        />

        <div className="landingHero__btnCont">
          <ScrollLink
            to="landing-contact"
            spy={true}
            smooth={true}
            duration={2000}
          >
            <CustomButton
              btnText={<Translate content="navBar.navContact" />}
              btnColor="green"
              btnType="button"
              className="landingHero__btn"
            />
          </ScrollLink>
          <img
            src="/static/index/hero_dots.webp"
            alt="dots"
            className="landingHero__dots"
          />
        </div>
      </div>
      <div className="landingHero__visual">
        {/* <img src={require("../../../static/index/hero1.webp")} alt="altHero"/> */}
        <img src="/static/index/hero1.webp" alt="heroImg" />
      </div>
    </div>
  </div>
);

export default LandingHero;
