import React from 'react';
import {BrowserRouter, Link , Switch, Route, Router} from 'react-router-dom';

import SplashScreen from './screens/splashScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={SplashScreen} />
        <Route path='/login' component={LoginScreen}/>
        <Route path='/register' component={RegisterScreen}/>
      </Switch>
    </BrowserRouter>
    )
}

export default App;
