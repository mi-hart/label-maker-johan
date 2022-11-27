import React from "react";

// import stylesheets
import "./home.scss";

// import sub components
import Sidebar from "../../components/Sidebar";
import Editor from "./Editor";
const Home = () => {
  return (
    <>
      <div className="back">
        <Sidebar />
        <Editor />
      </div>
    </>
  );
};

export default Home;
