import { CustomButton } from "../../CustomComponents/CustomComponents";
import Translate from "react-translate-component";

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
        <div className="landingWorks__card">
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
        </div>
        <div className="landingWorks__card">
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
        </div>
        <div className="landingWorks__card">
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
        </div>
      </div>
    </div>
  </div>
);

export default LandingWorks;
