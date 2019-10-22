import { Element } from "react-scroll";
import Layout from "../components/Layout/Layout";
import {
  LandingHero,
  LandingDiscover,
  LandingDesc,
  LandingWorks,
  LandingContact
} from "../components/Pages/Landing/Landing";

const Index = () => (
  <Layout>
    <Element id="landing-hero">
      <LandingHero />
    </Element>
    <LandingDiscover />
    <div className="layout__wavepart">
      <img src={require("../assets/img/index/wave.svg")} alt="wave" className="layout__wave1" />
    </div>
    <LandingDesc />
    <LandingWorks />
    <Element id="landing-contact">
      <LandingContact />
    </Element>
  </Layout>
);

export default Index;
