import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../colors.css';
import './styles/register.css';
class RegisterComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='registerContainer bgBlack'>
                <div className='register'>
                    <h1 className='fgWhite fontFamily'>REGISTER!</h1>
                    <form action="" className='registerForm'>
                        <input type="text" className='registerInput' placeholder='Enter Your Name Here!' />
                        <input type="email" className='registerInput' placeholder='Enter Your Email Here!' />
                        <input type="password" className='registerInput' placeholder='Enter Password Here!' />
                        <input type="text" className='registerInput' placeholder='Confirm Password!' />
                        <input type="submit" value='SIGN UP' className='registerInput fontFamily bgRed fgWhite'/>
                    </form>
                </div>
                <Link className='fgRed fontFamily link' to='/login'>SIGN IN NOW</Link>
            </div>
         );
    }
}
 
export default RegisterComponent;