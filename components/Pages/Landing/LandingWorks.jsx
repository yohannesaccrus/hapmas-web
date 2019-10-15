import { CustomButton } from "../../CustomComponents/CustomComponents";
import Translate from "react-translate-component";

const LandingWorks = () => (
  <div className="layout__container">
    <div className="landingWorks">
      <Translate component="p" className="main" content="landingWork.head" />
      <div className="landingWorks__cont">
        <img
          src="/static/index/work1.webp"
          alt="blob"
          className="landingWorks__contImg"
        />
        <div className="landingWorks__card">
          <img
            src="/static/index/work_target.webp"
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
            src="/static/index/work_diploma.webp"
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
            src="/static/index/work_chart.webp"
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
