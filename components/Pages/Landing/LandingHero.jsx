import { CustomButton } from "../../CustomComponents/CustomComponents";

const LandingHero = () => (
  <div className="layout__container">
    <div className="landingHero">
      <div className="landingHero__text">
        <p className="main">
          Let Data Improve <br /> Your Business
        </p>
        <div className="sub">
          Find various data in Hapmas, <br /> to grow up your business
        </div>
        <div className="landingHero__btnCont">
          <CustomButton
            btnText="Contact Us"
            btnColor="green"
            btnType="button"
            className="landingHero__btn"
          />
          <img
            src="/static/index/hero_dots.webp"
            alt="dots"
            className="landingHero__dots"
          />
        </div>
      </div>
      <div className="landingHero__visual">
        <img src="/static/index/hero1.webp" alt="heroImg" />
      </div>
    </div>
  </div>
);

export default LandingHero;
