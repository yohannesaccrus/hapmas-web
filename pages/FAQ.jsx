import Layout from "../components/Layout/Layout";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import Translate from "react-translate-component";

const FAQ = () => (
  <Layout title="Hapmas FAQ">
    <div className="layout__container">
      <div className="FAQ">
        <div className="main">
          <img src={require("../assets/img/landingDiscover/discover_ellips3.svg")} alt="circle" />
          <Translate component="p" content="faq.head" />
        </div>
        <div className="FAQ__cont">
          <div className="FAQ__label" id="toggler">
            <i className="fas fa-plus"></i>
            <Translate component="p" className="question" content="faq.q1" />
            <div className="FAQ__collapse">
              <UncontrolledCollapse toggler="#toggler">
                <div className="FAQ__card">
                  <Translate content="faq.a1" />
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
          <div className="FAQ__label" id="toggler2">
            <i className="fas fa-plus"></i>
            <Translate component="p" className="question" content="faq.q2" />
            <div className="FAQ__collapse">
              <UncontrolledCollapse toggler="#toggler2">
                <div className="FAQ__card">
                <Translate content="faq.a2" />
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
          <div className="FAQ__label" id="toggler3">
            <i className="fas fa-plus"></i>
            <Translate component="p" className="question" content="faq.q3" />
            <div className="FAQ__collapse">
              <UncontrolledCollapse toggler="#toggler3">
                <div className="FAQ__card">
                <Translate content="faq.a3" />
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default FAQ;
