import React, { Component } from 'react';
import '../colors.css';
import './styles/feed.css';

class FeedComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='bgBlue mainFeedComponent'>
                <div className='header'>
                    <img src={this.props.avatar} className='avatar'/>
                    <p className='fgWhite'>{this.props.name}</p>
                </div>
                <p className='fgWhite'>{this.props.text}</p>
                <img src={this.props.image} className='image'/>
                <button className='fgWhite bgRed' onClick={()=>{
                    console.log('check details clicked');
                }}>Check Details</button>
            </div>
         );
    }
}
 
export default FeedComponent;