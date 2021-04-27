import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../colors.css';
import './styles/feed.css';

class FeedComponent extends Component {
    state = {  
        postid:3,
    }
    render() { 
        return ( 
            <div className='bgBlue mainFeedComponent'>
                <div className='header'>
                    <img src={this.props.avatar} className='avatar'/>
                    <p className='fgWhite'>{this.props.name}</p>
                </div>
                <p className='fgWhite'>{this.props.text}</p>
                <img src={this.props.image} className='image'/>
                <Link to={{pathname:'/detail',
                    state:{
                        postid:this.state.postid,
                    },    
                }}>
                <button className='fgWhite bgRed'>Check Details</button>
                </Link>
                
            </div>
         );
    }
}
 
export default FeedComponent;