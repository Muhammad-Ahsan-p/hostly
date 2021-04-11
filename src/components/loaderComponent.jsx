import React, { Component } from 'react';
import './styles/loader.css';

class Loader extends Component {
    render() { 
        return (
            <div className='container'>
                <span></span>
                <span></span>
                <span></span>
            </div>
          );
    }
}
 
export default Loader;