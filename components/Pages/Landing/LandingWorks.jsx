import { CustomButton } from "../../CustomComponents/CustomComponents";
import Translate from "react-translate-component";
import ScrollAnimation from "react-animate-on-scroll";

const LandingWorks = () => (
  <div className="layout__container">
    <div className="landingWorks">
      <Translate component="p" className="main" content="landingWork.head" />
      <div className="landingWorks__cont">
        <img
          src={require("../../../assets/img/landingWorks/work1.svg")}
          alt="blob"
          className="landingWorks__contImg"
        />

        <ScrollAnimation
          animateIn="fadeInRight"
          duration={1}
          delay={200}
          className="landingWorks__card"
        >
          <img
            src={require("../../../assets/img/landingWorks/work_target.svg")}
            alt="illust"
            className="cardImg"
          />
          <div className="text">
            <Translate
              component="div"
              className="title"
              content="landingWork.card1Title"
            />
            <Translate
              component="div"
              className="desc"
              content="landingWork.card1Desc"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInRight"
          duration={1}
          delay={300}
          className="landingWorks__card"
        >
          <img
            src={require("../../../assets/img/landingWorks/work_diploma.svg")}
            alt="illust"
            className="cardImg"
          />
          <div className="text">
            <Translate
              component="div"
              className="title"
              content="landingWork.card2Title"
            />
            <Translate
              component="div"
              className="desc"
              content="landingWork.card2Desc"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInRight"
          duration={1}
          delay={400}
          className="landingWorks__card"
        >
          <img
            src={require("../../../assets/img/landingWorks/work_chart.svg")}
            alt="illust"
            className="cardImg"
          />
          <div className="text">
            <Translate
              component="div"
              className="title"
              content="landingWork.card3Title"
            />
            <Translate
              component="div"
              className="desc"
              content="landingWork.card3Desc"
            />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
);

export default LandingWorks;
