import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import auth from "./services/authSerivce";

import SplashScreen from "./screens/splashScreen";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/registerScreen";
import HomeScreen from "./screens/homeScreen";
import DetailScreen from "./screens/detailScreen";
import ChatScreen from "./screens/chatScreen";
import AboutScreen from "./screens/aboutScreen";
import ContactScreen from "./screens/contactScreen";
import Logout from "./components/logoutComponent";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route path="/detail/:id" component={DetailScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/home" component={HomeScreen} />

        <Route
          path="/chat/:id"
          render={(props) => {
            if (auth.getUser()) return <ChatScreen {...props} />;
            return <Redirect to="/login" />;
          }}
        />
        <Route path="/about" component={AboutScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/logout" component={Logout} />
        <Route path="/not-found" render={() => "Page Not Found"} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
