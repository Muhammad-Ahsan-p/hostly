import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import SplashScreen from './screens/splashScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import HomeScreen from './screens/homeScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/splash' component={SplashScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/' component={HomeScreen} />
      </Switch>
    </BrowserRouter>
    )
}

export default App;
