import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../components/loaderComponent.jsx";
import "./styles/splash.css";

function SplashScreen() {
  const history = useHistory();
  const load = () => history.push("/home");
  setTimeout(load, 3000);
  return (
    <div className="splash">
      <div className="splashContent">
        <h1>HOSTLY</h1>
        <h2>Find Your Desire Hostel Here</h2>
        <Loader />
      </div>
    </div>
  );
}
export default SplashScreen;
