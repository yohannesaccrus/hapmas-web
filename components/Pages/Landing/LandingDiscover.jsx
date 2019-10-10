const LandingDiscover = () => (
  <div className="layout__container">
    <div className="landingDiscover">
      <div className="head">Discover Why Data Matter</div>
      <div className="landingDiscover__cont">
        <div className="landingDiscover__card">
          <div className="landingDiscover__visual">
            <img src="/static/index/discover_pict1.webp" alt="discover" />
          </div>
          <div className="landingDiscover__text">
            <div className="main">
              <img src="/static/index/discover_ellips1.webp" alt="circle" />
              <p className="title">Data Helps you solve problem</p>
              <p className="desc">
                Analyzed and well-structured Data is a great way to identify
                what cause problem throughout your business. a step that had
                been taken based on data is more useful to overcome the problem
                you have.
              </p>
            </div>
          </div>
        </div>
        <div className="landingDiscover__card">
          <div className="landingDiscover__visual">
            <img src="/static/index/discover_pict2.webp" alt="discover" />
          </div>
          <div className="landingDiscover__text">
            <div className="main">
              <img src="/static/index/discover_ellips2.webp" alt="circle" />
              <p className="title">Data Helps you Improve Process</p>
              <p className="desc">
                With data from your current business process, you can check
                which part of your business that can be more optimized. So your
                business will run effectively while also maintain your cost as
                low as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="landingDiscover__card">
          <div className="landingDiscover__visual">
            <img src="/static/index/discover_pict3.webp" alt="discover" />
          </div>
          <div className="landingDiscover__text">
            <div className="main">
              <img src="/static/index/discover_ellips3.webp" alt="circle" />
              <p className="title">Data makes you reach more</p>
              <p className="desc">
                Through prediction and insight extracted from data, you can
                classify and prioritize your business target so it turns your
                business to income generating machine faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingDiscover;
