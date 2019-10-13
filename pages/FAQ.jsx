import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { CustomButton } from "../components/CustomComponents/CustomComponents";

const FAQ = () => (
  <Layout>
    <div className="layout__container">
      <div className="FAQ">
        <div className="main">
          <img src="/static/index/discover_ellips2.webp" alt="circle" />
          <p>We Hope These Might Help You</p>
        </div>
        <div className="FAQ__cont">
          <div className="FAQ__label" id="toggler">
            <i className="fas fa-plus"></i>
            <p className="question">What is Hapmas ?</p>
            <div className="FAQ__collapse">
              <UncontrolledCollapse toggler="#toggler">
                <div className="FAQ__card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  odit enim sunt quidem ipsum quo sit ipsam est assumenda saepe
                  alias delectus voluptatum eius excepturi debitis, mollitia
                  accusantium fuga doloribus.
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
          <div className="FAQ__label" id="toggler2">
            <i className="fas fa-plus"></i>
            <p className="question">How Hapmas Works ?</p>
            <div className="FAQ__collapse">
              <UncontrolledCollapse toggler="#toggler2">
                <div className="FAQ__card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  odit enim sunt quidem ipsum quo sit ipsam est assumenda saepe
                  alias delectus voluptatum eius excepturi debitis, mollitia
                  accusantium fuga doloribus.
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
          <div className="FAQ__label" id="toggler3">
            <i className="fas fa-plus"></i>
            <p className="question">How to make a coffee ?</p>
            <div className="FAQ__collapse">
              <UncontrolledCollapse toggler="#toggler3">
                <div className="FAQ__card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  odit enim sunt quidem ipsum quo sit ipsam est assumenda saepe
                  alias delectus voluptatum eius excepturi debitis, mollitia
                  accusantium fuga doloribus.
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
