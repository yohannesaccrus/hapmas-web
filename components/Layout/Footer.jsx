import { Link as ScrollLink } from "react-scroll";
import { Row, Col } from "reactstrap";
import Translate from "react-translate-component";

const Footer = () => (
  <div className="footer">
    <Row>
      <Col xs="6" xl="4">
        <Translate component="div" className="main" content="footer.company" />
        <Translate component="div" className="link" content="footer.about" />
        <ScrollLink
          to="landing-contact"
          spy={true}
          smooth={true}
          duration={2000}
        >
          <Translate
            component="div"
            className="link"
            content="footer.contact"
          />
        </ScrollLink>
        <Translate component="div" className="link" content="footer.news" />
      </Col>
      <Col xs="6" xl="4">
        <Translate component="div" className="main" content="footer.service" />
        <div className="link">Hapmas Ranger</div>
        <div className="link">Hapmas Open Data</div>
      </Col>
      <Col xs="12" xl="4">
        <Translate component="div" className="main" content="footer.social" />
        <div className="footer__icons">
          <a href="https://www.instagram.com/hapmas.id/?hl=en" target="_blank">
            <i className="fab fa-instagram" />
          </a>
          {/* <i className="fab fa-twitter-square" /> */}
          <a href="https://www.facebook.com/hapmas.id.3" target="_blank ">
            <i className="fab fa-facebook-square" />
          </a>
        </div>
      </Col>
      <Col xs="12">
        <div className="footer__info">
          download <span>Hapmas Ranger</span> app
        </div>
        <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="logo" className="footer__playstore"/>
      </Col>
      <Col xs="12">
        <img
          src="/static/navbar/hapmas-min.webp"
          alt="logo"
          className="footer__logo"
        />
        <p className="copyright">
          © Copyright 2019 Hapmas. <br />
          All rights reserved.
        </p>
      </Col>
    </Row>
    <img
      src="/static/footer/footer1.svg"
      alt="illust1"
      className="footer__illust1"
    />
    <img
      src="/static/footer/footer2.svg"
      alt="illust2"
      className="footer__illust2"
    />
    <ScrollLink to="landing-hero" spy={true} smooth={true} duration={2000}>
      <button type="button" className="footer__btnUp">
        <i className="fas fa-angle-double-up"></i>
      </button>
    </ScrollLink>
  </div>
);

export default Footer;
