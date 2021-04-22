import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
                        <input type="email" placeholder='Email!' className='loginInput'/>
                        <input type="password" placeholder='Password!' className='loginInput'/>
                        <Link to='/home'><input type="submit" value="Sign In" className="bgRed fgWhite loginInput fontFamily"/></Link>
                        
                    </form>
                    <Link className='fgWhite link' to=''>Forget Password</Link>
                    <Link className='fgRed fontFamily link' to='/register'>SIGN UP NOW</Link>
                </div>
            </div>
         );
    }
}
 
export default LoginComponent;