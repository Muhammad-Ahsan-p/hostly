import React, { Component } from 'react';
import NavBar from '../components/navComponent';
import '../colors.css';
import './styles/home.css';
import { Link } from 'react-router-dom';

class HomeScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='bgBlack homeContainer'>
                <NavBar/>
                <div className='homeSection'>
                    <div className='followingFeed bgBlue'>
                        <this.followingComponent image={require('../logo.png')} name='ahsan'/>
                        <this.followingComponent name='abc'/>
                        <this.followingComponent name='abs'/>
                    </div>
                    <div className='homeFeed'>

                    </div>
                    <div className='createPost bgBlue'>

                    </div>
                </div>
            </div>
         );
    }


    followingComponent(props){
        return(
            <div className='bgBlack followingComponent'>
                <p className='fgWhite'>{props.name}</p>
                <img src={props.image}/>
                <button className='bgRed fgWhite'>Follow</button>
            </div>
        );
    }
    
}
 
export default HomeScreen;