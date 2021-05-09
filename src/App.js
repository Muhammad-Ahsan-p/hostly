import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SplashScreen from "./screens/splashScreen";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/registerScreen";
import HomeScreen from "./screens/homeScreen";
import DetailScreen from "./screens/detailScreen";
import ChatScreen from "./screens/chatScreen";
import AboutScreen from "./screens/aboutScreen";
import ContactScreen from "./screens/contactScreen";
import CreatePost from "./screens/createPostScreen";
import Logout from "./components/logoutComponent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/createPost" component={CreatePost} />
        <Route path="/detail" component={DetailScreen} />
        <Route path="/chat" component={ChatScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
