import React from 'react';
import './App.css';
import SplashScreen from './screens/splashScreen.js';
import LoginScreen from './screens/loginScreen.js';

function App() {
  return (
    <div className="App">
      <SplashScreen/>
      <LoginScreen/>      
    </div>
  );
}

export default App;
