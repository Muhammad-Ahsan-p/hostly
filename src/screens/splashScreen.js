import React from 'react';
import './styles/styles.css';

export default function splashScreen() {
    return (
        <div className='center pink'>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between',alignItems:'center', height:130}}>
                <h1 className='fontFamily'>HOSTLY</h1>
                <h2 className='fontFamily'>Find Your Desire Hostel Here</h2>
                <div style={{width:100, display:'flex', justifyContent:'space-between'}}>
                    <div style={{backgroundColor:'red', width:15,height:15, borderRadius:50}}>

                    </div>
                    <div style={{backgroundColor:'brown', width:15,height:15, borderRadius:50}}>

                    </div>
                    <div style={{backgroundColor:'black', width:15,height:15, borderRadius:50}}>

                    </div>
                </div>
            </div>
        </div>
    )
}
