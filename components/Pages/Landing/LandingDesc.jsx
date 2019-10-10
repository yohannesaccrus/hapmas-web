import { CustomButton } from "../../CustomComponents/CustomComponents";

const LandingDesc = () => (
  <div className="layout__container layout__container--grey">
    <div className="landingDesc">
      <p className="main">Rapid Solution to your Businesses</p>
      <div className="landingDesc__cont">
        <div className="landingDesc__head">
          <div className="text">
            <p className="main">Hapmas is Data Engine</p>
            <p className="desc">
              We combine the insight of Business Intelligence and the Variety of
              Data through Data as a Service into a Data Engine. Hapmas as Data
              Service give the convenience to user to get any data they need,
              from public into spesific data which it need direct data gathering
              from the field.
            </p>
            <p className="desc">
              We also provide the analytic and insights from the data we
              retrieved. The analytic and the insights are useful for decision
              support in marketing needs, improving your business by optimalize
              your production process, and also as a prediction of what the
              company will be.
            </p>
          </div>
          <div className="visual">
            <img src="/static/index/solution_pict1.webp" alt="solutionImg" />
          </div>
        </div>
        <div className="landingDesc__cardCont">
          <div className="landingDesc__card">
            <img
              src="/static/index/solution_ticket.webp"
              alt="cardIcon"
              className="icon"
            />
            <p className="main">
              Open Source <span className="blue">Free</span> Scrapping Data
            </p>
            <p className="desc">
              We serve an open-source data that can be used for business
              development, research, or even education purposes.
            </p>
            <div className="link link--blue">Open Data</div>
          </div>

          <div className="landingDesc__card">
            <img
              src="/static/index/solution_search.webp"
              alt="cardIcon"
              className="icon"
            />
            <p className="main">
              <span className="green">Premium</span> Web + Socmed Scrapping
            </p>
            <p className="desc">
              Tell us what and how many of data you need. We'll gladly surf
              accross the net to make it ready for you.
            </p>
            <div className="link link--blue">See More</div>
          </div>

          <div className="landingDesc__card">
            <img
              src="/static/index/solution_crane.webp"
              alt="cardIcon"
              className="icon"
            />
            <p className="main">Data Gathering</p>
            <p className="desc">
              Need direct data gathering throughout the country ? nevermind,
              We'll gladly handle it. We gather it, analyze it, and deliver it
              to you.
            </p>
            <div className="link link--blue">See More</div>
          </div>

          <div className="landingDesc__card">
            <img
              src="/static/index/solution_analytic.webp"
              alt="cardIcon"
              className="icon"
            />
            <p className="main">Data Analytic and Optimalization</p>
            <p className="desc">
              Get your insight, prediction, and solution for your business
              development based on your own company data.
            </p>
            <div className="link link--blue">See More</div>
          </div>

          <div className="landingDesc__card">
            <img
              src="/static/index/solution_marketing.webp"
              alt="cardIcon"
              className="icon"
            />
            <p className="main">Marketing Tools</p>
            <p className="desc">
              Your marketing campaign and promotion activity will be done more
              easily with the help from our rangers.
            </p>
            <div className="link link--blue">See More</div>
          </div>

          <div className="landingDesc__card landingDesc__card--btn">
            <img
              src="/static/index/desc_btn.webp"
              alt="haha"
              className="landingDesc__btnImage"
            />
            <CustomButton
              btnText="Contact Us"
              btnType="button"
              btnColor="blue"
              className="landingDesc__btn"
            />
            <img
              src="/static/index/hero_dots.webp"
              alt="dots"
              className="landingDesc__btnDots"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingDesc;
