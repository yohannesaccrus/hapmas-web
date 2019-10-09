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
    <LandingHero />
    <LandingDiscover />
    <div className="layout__wavepart">
      <img src="/static/index/wave.svg" alt="wave" className="layout__wave1" />
    </div>
    <LandingDesc />
    <LandingWorks/>
    <LandingContact/>
  </Layout>
);

export default Index;
