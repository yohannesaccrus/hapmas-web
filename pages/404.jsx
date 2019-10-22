import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { CustomButton } from "../components/CustomComponents/CustomComponents";

const ErrorPage = () => (
  <Layout>
    <div className="layout__container">
      <div className="under">
        <img src={require("../assets/img/404/const.svg")} alt="img" className="under__img" />
        <div className="main">Page Still Under Construction</div>
        <div className="sub">Be Back Soon !</div>
        <Link href="/">
          <a>
            <CustomButton
              btnText="Going Home"
              className="under__btn"
              btnColor="blue"
            />
          </a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default ErrorPage;
