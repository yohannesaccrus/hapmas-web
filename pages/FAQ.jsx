import Layout from "../components/Layout/Layout";
import { UncontrolledCollapse } from "reactstrap";
import Translate from "react-translate-component";
import ScrollAnimation from "react-animate-on-scroll";

const FAQ = () => (
  <Layout title="Hapmas FAQ">
    <ScrollAnimation animateIn="fadeIn" duration={1} delay={200}>
      <div className="layout__container">
        <div className="FAQ">
          <div className="main">
            <ScrollAnimation
              animateIn="fadeInLeft"
              duration={1}
              delay={300}
              animateOnce
            >
              <img
                src={require("../assets/img/landingDiscover/discover_ellips3.svg")}
                alt="circle"
              />
            </ScrollAnimation>
            <Translate component="p" content="faq.head" />
          </div>
          <div className="FAQ__cont">
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={1}
              delay={300}
              animateOnce
              style={{marginBottom: '2rem',}}
            >
              <div className="FAQ__label" id="toggler">
                <i className="fas fa-plus"></i>
                <Translate
                  component="p"
                  className="question"
                  content="faq.q1"
                />
                <div className="FAQ__collapse">
                  <UncontrolledCollapse toggler="#toggler">
                    <div className="FAQ__card">
                      <Translate content="faq.a1" />
                    </div>
                  </UncontrolledCollapse>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInUp"
              duration={1}
              delay={500}
              animateOnce
              style={{marginBottom: '2rem',}}
            >
              <div className="FAQ__label" id="toggler2">
                <i className="fas fa-plus"></i>
                <Translate
                  component="p"
                  className="question"
                  content="faq.q2"
                />
                <div className="FAQ__collapse">
                  <UncontrolledCollapse toggler="#toggler2">
                    <div className="FAQ__card">
                      <Translate content="faq.a2" />
                    </div>
                  </UncontrolledCollapse>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInUp"
              duration={1}
              delay={700}
              animateOnce
            >
              <div className="FAQ__label" id="toggler3">
                <i className="fas fa-plus"></i>
                <Translate
                  component="p"
                  className="question"
                  content="faq.q3"
                />
                <div className="FAQ__collapse">
                  <UncontrolledCollapse toggler="#toggler3">
                    <div className="FAQ__card">
                      <Translate content="faq.a3" />
                    </div>
                  </UncontrolledCollapse>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </Layout>
);

export default FAQ;
