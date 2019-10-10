import { CustomButton } from "../../CustomComponents/CustomComponents";

const LandingWorks = () => (
  <div className="layout__container">
    <div className="landingWorks">
      <p className="main">Why We're Different</p>
      <div className="landingWorks__cont">
        <img src="/static/index/work1.webp" alt="blob" className="landingWorks__contImg"/>
        <div className="landingWorks__card">
          <img src="/static/index/work_target.webp" alt="illust" className="cardImg"/>
          <div className="text">
            <div className="title">Custom Data Request</div>
            <div className="desc">Let's any kind of data you need for your business development</div>
          </div>
        </div>
        <div className="landingWorks__card">
          <img src="/static/index/work_diploma.webp" alt="illust" className="cardImg"/>
          <div className="text">
            <div className="title">Custom Data Request</div>
            <div className="desc">Let's any kind of data you need for your business development</div>
          </div>
        </div>
        <div className="landingWorks__card">
          <img src="/static/index/work_chart.webp" alt="illust" className="cardImg"/>
          <div className="text">
            <div className="title">Custom Data Request</div>
            <div className="desc">Let's any kind of data you need for your business development</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingWorks;
