import Layout from "../components/Layout/Layout";

const Team = () => (
  <Layout>
    <div className="layout__container">
      <div className="team">
        <div className="main">
          <img src="/static/index/discover_ellips2.webp" alt="circle" />
          <p>Our Behind the Team</p>
        </div>
        <div className="team__cardCont">
          <div className="team__card">
            <div className="text">
              <div className="name">Wingo Hercahyo</div>
              <div className="role">Company Partner</div>
              <div className="socialCont">
                <div className="social">
                  <i className="fab fa-instagram"></i>
                  <p>@wings.hercahyo</p>
                </div>
                <div className="social">
                  <i className="fab fa-linkedin"></i>
                  <p>wingohercahyo</p>
                </div>
              </div>
            </div>
            <div className="visual">
              <div
                className="visual__overlay"
                style={{ backgroundImage: "url(http://bit.ly/2OJV9UH)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Team;
