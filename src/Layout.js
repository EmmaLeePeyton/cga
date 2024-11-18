import {Outlet, /*Link*/} from "react-router-dom";
//import {useState} from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
//import QuestionModal from "./components/QuestionModal";
import "./css/Layout.css";

const Layout = () => {
  return (
    <>
      <div id="content">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export default Layout;