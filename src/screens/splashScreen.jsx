
import React, { Component } from 'react';
import Loader from '../components/loaderComponent.jsx';
import './styles/styles.css';
import '../colors.css';

class SplashScreen extends Component {
    render() { 
        return ( 
            <div className='center bgBlue'>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:130}}>
                    <h1 className='fontFamily fgWhite'>HOSTLY</h1>
                    <h2 className='fontFamily fgWhite'>Find Your Desire Hostel Here</h2>
                    <Loader/>
                </div>            
            </div>
         );
    }
}
 
export default SplashScreen;
