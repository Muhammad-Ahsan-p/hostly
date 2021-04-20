import React, { Component } from 'react';
import RegisterComponent from '../components/registerComponent';

import './styles/styles.css';

class RegisterScreen extends Component {
    state = {  }
    render() { 
        return (
            <div className='center bgBlue'>
                <RegisterComponent/>
            </div> 
         );
    }
}
 
export default RegisterScreen;