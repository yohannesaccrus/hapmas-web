import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Collapse, Row, Col } from "reactstrap";

class NavBar extends React.Component {
  state = { collapse: false, serviceCollapse: false };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  toggleService = () => {
    this.setState({ serviceCollapse: !this.state.serviceCollapse });
  };

  render() {
    const { collapse, serviceCollapse } = this.state;
    return (
      <div className="navBar">
        <Row>
          <Col xs="10" xl="2" className="navBar__img">
            <Link href="/">
              <img src="/static/navbar/hapmas-min.webp" alt="hapmasLogo" />
            </Link>
          </Col>

          <Col xs="2" xl="10" className="navBar__menus">
            <Link href="/">
              <div className="navBar__menu">Home</div>
            </Link>

            <Link href="/FAQ">
              <div className="navBar__menu">About Us</div>
            </Link>

            <Link href="/FAQ">
              <div className="navBar__menu">Our Team</div>
            </Link>
            
            <Link href="/FAQ">
              <div className="navBar__menu">FAQ</div>
            </Link>

            <Link href="/">
              <ScrollLink
                to="landing-contact"
                spy={true}
                smooth={true}
                duration={2000}
              >
                <a>
                  <div className="navBar__menu navBar__menu--contact">
                    <i className="fas fa-phone-volume"></i>
                    Contact Us
                  </div>
                </a>
              </ScrollLink>
            </Link>
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
                  <div className="navBar__link">Home</div>
                </Link>

                <Link href="/FAQ">
                  <div className="navBar__link">FAQ</div>
                </Link>

                {/* <div className="navBar__link" onClick={this.toggleService}>
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
                </div> */}

                {/* <Link href="/FAQ">
                  <div className="navBar__link">FAQ</div>
                </Link> */}
              </div>
            </Collapse>
          </div>
        </Row>
      </div>
    );
  }
}

export default NavBar;
