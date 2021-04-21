import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../colors.css';
import './styles/navbar.css';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='bgBlue navContainer'>
                <h1 className='fgWhite fontFamily title'>Hostly</h1>
                <div className='icon' onClick={()=>{
                    console.log('icon clicked');
                }}>
                </div>
                <div className='menu bgBlue'>
                    <Link className='menuButton fgWhite' to=''>Home</Link>
                    <Link className='menuButton fgWhite' to=''>About Us</Link>
                    <Link className='menuButton fgWhite' to=''>Contact Us</Link>
                </div>
            </div>
         );
    }
}
 
export default NavBar;