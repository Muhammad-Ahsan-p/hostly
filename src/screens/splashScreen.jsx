import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../components/loaderComponent.jsx";
import "./styles/styles.css";
import "../colors.css";

function SplashScreen() {
  const history = useHistory();
  const load = () => history.push("/home");
  setTimeout(load, 3000);
  return (
    <div className="center bgBlue">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: 130,
        }}
      >
        <h1 className="fontFamily fgWhite">HOSTLY</h1>
        <h2 className="fontFamily fgWhite">Find Your Desire Hostel Here</h2>
        <Loader />
      </div>
    </div>
  );
}
export default SplashScreen;
