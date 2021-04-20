import React, { Component } from 'react';
import './styles/loader.css';

class Loader extends Component {
    render() { 
        return (
            <div className='loader'>
                <span className='dots'></span>
                <span className='dots'></span>
                <span className='dots'></span>
            </div>
          );
    }
}
 
export default Loader;