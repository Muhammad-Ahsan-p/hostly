import React, { Component } from 'react';
import NavBar from '../components/navComponent';
import '../colors.css';
import './styles/detail.css';

class Details extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            </div>
         );
    }

    Image(props){
        return(
            <img src={props.image} style={{width:100, height:100}} />
        );
    }
}
 
export default Details;