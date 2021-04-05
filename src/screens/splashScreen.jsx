
import React, { Component } from 'react';
import './styles/styles.css';

class SplashScreen extends Component {
    render() { 
        return ( 
            <div className='center primaryColor'>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:130}}>
                    <h1 className='fontFamily fontWhite'>HOSTLY</h1>
                    <h2 className='fontFamily fontWhite'>Find Your Desire Hostel Here</h2>
                </div>            
            </div>
         );
    }
}
 
export default SplashScreen;
