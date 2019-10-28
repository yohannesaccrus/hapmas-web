import { Element } from "react-scroll";
import Layout from "../components/Layout/Layout";
import {
  LandingHero,
  LandingDiscover,
  LandingDesc,
  LandingWorks,
  LandingContact
} from "../components/Pages/Landing/Landing";
import ScrollAnimation from "react-animate-on-scroll";

const Index = () => (
  <Layout title="Hapmas">
    <ScrollAnimation animateIn="fadeIn" duration={1} delay={200}>
      <Element id="landing-hero">
        <LandingHero />
      </Element>
      <LandingDiscover />
      <div className="layout__wavepart">
        <img
          src={require("../assets/img/index/wave.svg")}
          alt="wave"
          className="layout__wave1"
        />
      </div>
      <LandingDesc />
      <LandingWorks />
      <Element id="landing-contact">
        <LandingContact />
      </Element>
    </ScrollAnimation>
  </Layout>
);

export default Index;
