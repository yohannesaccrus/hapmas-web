import Layout from "../components/Layout/Layout";

const AboutUs = () => (
  <Layout>
    <div className="layout__container">
      <div className="about">
        <div className="main">
          <img src="/static/index/discover_ellips3.webp" alt="circle" />
          <p>Reveal the treasure behind Data</p>
        </div>
        <div className="about__first">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              recusandae repellendus, ut, sequi, et atque culpa architecto
              perferendis mollitia vel quam obcaecati vero! Repudiandae
              architecto excepturi harum minima, pariatur similique?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              recusandae repellendus, ut, sequi, et atque culpa architecto
              perferendis mollitia vel quam pariatur similique?
            </p>
          </div>
          <div className="visual">
            <img src="http://bit.ly/2pkB7pi" alt="img" className="pict1" />
            <img
              src="/static/index/discover_pict1.webp"
              alt="img"
              className="pict2"
            />
          </div>
        </div>

        <div className="main main--second">
          <p>Our Services Target</p>
        </div>
        <div className="about__second">
          <div className="about__cardCont">
            <div className="about__card">
              <img src="http://bit.ly/2pjBuQE" alt="cardImg" />
              <div className="text">
                <p className="title">Lorem Ipsum</p>
                <p className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                  nisi inventore ad iure odio harum expedita dolore tempore
                  natus, reiciendis hic blanditiis eum corrupti voluptate culpa
                  fugit reprehenderit eligendi! Dignissimos!
                </p>
              </div>
              <img
                src="/static/index/discover_pict1.webp"
                alt="img"
                className="illust"
              />
            </div>
            <div className="about__card">
              <img src="http://bit.ly/2MG6EKf" alt="cardImg" />
              <div className="text">
                <p className="title">Lorem Ipsum</p>
                <p className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                  nisi inventore ad iure odio harum expedita dolore tempore
                  natus, reiciendis hic blanditiis eum corrupti voluptate culpa
                  fugit reprehenderit eligendi! Dignissimos!
                </p>
              </div>
              <img
                src="/static/index/discover_pict2.webp"
                alt="img"
                className="illust"
              />
            </div>
            <div className="about__card">
              <img src="http://bit.ly/2ph4lFv" alt="cardImg" />
              <div className="text">
                <p className="title">Lorem Ipsum</p>
                <p className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                  nisi inventore ad iure odio harum expedita dolore tempore
                  natus, reiciendis hic blanditiis eum corrupti voluptate culpa
                  fugit reprehenderit eligendi! Dignissimos!
                </p>
              </div>
              <img
                src="/static/index/discover_pict3.webp"
                alt="img"
                className="illust"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutUs;
