import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="static/icon.png" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap"
      ></link>
    </Head>
    <NavBar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
