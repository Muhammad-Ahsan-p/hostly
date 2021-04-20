import React, { Component } from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import '../colors.css';
import './styles/login.css';

class LoginComponent extends Component {
    state = {  }
    render() { 
        return (
            <div className='bgBlack container'>
                <div className='loginContainer'>
                    <h1 className='fgWhite fontFamily'>LOGIN HERE!</h1>
                    <form action="" className='loginForm'>
                        <input type="email" className='loginInput'/>
                        <input type="password" className='loginInput'/>
                        <input type="submit" value="Sign In" className="bgRed fgWhite loginInput fontFamily"/>
                    </form>
                    <span className='fgWhite' onClick={()=>{
                        console.log('Forget Password')
                        }}>Forget Password</span>
                    <span className='fgRed fontFamily' onClick={()=>{
                            console.log('Sign Up');
                        }}
                    >SIGN UP NOW</span>
                </div>
            </div>
         );
    }
}
 
export default LoginComponent;