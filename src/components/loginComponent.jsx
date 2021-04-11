import React, { Component } from 'react';
import '../colors.css';
import './styles/login.css';

class LoginComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='bgBlack container'>
                <h1 className='fgWhite'>Sign In</h1>
                <form action="">
                    <input type="email"/>
                    <input type="password"/>
                    <input type="submit"/>

                </form>
            </div>
         );
    }
}
 
export default LoginComponent;