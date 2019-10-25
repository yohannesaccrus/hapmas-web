// import Link from "next/link";
import Link from "./ActiveLink";
import { Link as ScrollLink } from "react-scroll";
import { Collapse, Row, Col } from "reactstrap";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "../../lang/en";
import ind from "../../lang/ind";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("ind", ind);
counterpart.setLocale("en");

class NavBar extends React.Component {
  state = { collapse: false, serviceCollapse: false, lang: "en" };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  toggleService = () => {
    this.setState({ serviceCollapse: !this.state.serviceCollapse });
  };

  onLangChange = e => {
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };

  render() {
    const { collapse, serviceCollapse } = this.state;
    return (
      <div className="navBar">
        <Row>
          <Col xs="10" xl="2" className="navBar__img">
            <Link href="/">
              <a>
                <img
                  src={require("../../assets/img/navbar/hapmas-min.svg")}
                  alt="hapmasLogo"
                />
              </a>
            </Link>
          </Col>

          <Col xs="2" xl="10" className="navBar__menus">
            <Link href="/" activeClassName="active">
              <a className="navBar__menu">
                <Translate content="navBar.navHome" />
              </a>
            </Link>

            <Link href="/about" activeClassName="active">
              <a className="navBar__menu">
                <Translate content="navBar.navAbout" />
              </a>
            </Link>

            <Link href="/team" activeClassName="active">
              <a className="navBar__menu">
                <Translate content="navBar.navTeam" />
              </a>
            </Link>

            <Link href="/FAQ" activeClassName="active">
              <a className="navBar__menu">FAQ</a>
            </Link>

            <Link href="/">
              <ScrollLink
                to="landing-contact"
                spy={true}
                smooth={true}
                duration={2000}
              >
                <div className="navBar__menu navBar__menu--contact">
                  <Translate content="navBar.navContact" />
                </div>
              </ScrollLink>
            </Link>

            <div className="navBar__menu navBar__menu--select">
              <select value={this.state.lang} onChange={this.onLangChange}>
                <option value="en">ENG</option>
                <option value="ind">IND</option>
              </select>
            </div>
          </Col>

          <Col xs="2" sm="1" md="1" className="navBar__menuSelect">
            <select value={this.state.lang} onChange={this.onLangChange}>
              <option value="en">ENG</option>
              <option value="ind">IND</option>
            </select>
          </Col>

          <Col xs="2" className="navBar__toggler">
            <i
              className={`fas fa-ellipsis-v ${
                collapse === true ? "active" : "inactive"
              }`}
              onClick={this.toggle}
            />
          </Col>

          <div className="navBar__mobile">
            <Collapse isOpen={collapse}>
              <div className="navBar__collapse">
                <Link href="/">
                  <a className="navBar__link">
                    <Translate content="navBar.navHome" />
                  </a>
                </Link>

                <Link href="/about">
                  <a className="navBar__link">
                    <Translate content="navBar.navAbout" />
                  </a>
                </Link>

                <Link href="/team">
                  <a className="navBar__link">
                    <Translate content="navBar.navTeam" />
                  </a>
                </Link>

                <Link href="/FAQ">
                  <a className="navBar__link">FAQ</a>
                </Link>
              </div>
            </Collapse>
          </div>
        </Row>
      </div>
    );
  }
}

export default NavBar;

{
  /* <Link href="/">
                    <ScrollLink
                      to="landing-contact"
                      spy={true}
                      smooth={true}
                      duration={2000}
                    >
                      <a className="navBar__menu navBar__menu--contact">
                          <i className="fas fa-phone-volume"></i>
                          Contact Us
                      </a>
                    </ScrollLink>
                </Link> */
}

{
  /* <div className="navBar__link" onClick={this.toggleService}>
                  Layanan
                  <Collapse isOpen={serviceCollapse}>
                    <div className="navBar__secondCollapse">
                      <Link href="/serviceRanger">
                        <div className="navBar__secondLink">Hapmas Ranger</div>
                      </Link>
                      <Link href="/serviceOpen">
                        <div className="navBar__secondLink">Hapmas Open</div>
                      </Link>
                    </div>
                  </Collapse>
                </div> */
}

{
  /* <Link href="/FAQ">
                  <div className="navBar__link">FAQ</div>
                </Link> */
}
