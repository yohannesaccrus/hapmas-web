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
                  <i className="fab fa-facebook-square"></i>
                  <p>wingohercahyo</p>
                </div>
              </div>
            </div>
            <div className="visual visual--wingo"></div>
          </div>
          <div className="team__card">
            <div className="text">
              <div className="name">Hadi Nur Wahid</div>
              <div className="role">Fullstack Developer</div>
              <div className="socialCont">
                <div className="social">
                  <i className="fab fa-instagram"></i>
                  <p>@hadinw</p>
                </div>
                <div className="social">
                  <i className="fab fa-facebook-square"></i>
                  <p>hadinurwahid</p>
                </div>
              </div>
            </div>
            <div className="visual visual--hadi"></div>
          </div>
          <div className="team__card">
            <div className="text">
              <div className="name">Icha M. Febriyana</div>
              <div className="role">Product Development</div>
              <div className="socialCont">
                <div className="social">
                  <i className="fab fa-instagram"></i>
                  <p>@ichamw</p>
                </div>
                <div className="social">
                  <i className="fab fa-facebook-square"></i>
                  <p>ichamf</p>
                </div>
              </div>
            </div>
            <div className="visual visual--hadi"></div>
          </div>
          <div className="team__card">
            <div className="text">
              <div className="name">Fransiskus Arnoldy</div>
              <div className="role">Mobile Engineer</div>
              <div className="socialCont">
                <div className="social">
                  <i className="fab fa-instagram"></i>
                  <p>@fransiskus.arnoldy</p>
                </div>
                <div className="social">
                  <i className="fab fa-facebook-square"></i>
                  <p>ichamf</p>
                </div>
              </div>
            </div>
            <div className="visual visual--hadi"></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Team;
