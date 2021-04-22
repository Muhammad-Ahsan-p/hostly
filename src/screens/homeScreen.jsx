import React, { Component } from 'react';
import NavBar from '../components/navComponent';
import '../colors.css';
import './styles/home.css';
import { Link } from 'react-router-dom';
import FeedComponent from '../components/feedComponent';
class HomeScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='bgBlack homeContainer'>
                <NavBar/>
                <div className='homeSection'>
                    <div className='followingFeed bgBlue'>
                        <this.followingComponent image={require('../man.png')} name='ahsan'/>
                        <this.followingComponent name='abc'/>
                        <this.followingComponent name='abs'/>
                    </div>
                    <div className='homeFeed'>
                        <FeedComponent name='Abc Hostal' text='4 bed room is free' image={require('../man.png')}/>
                        <FeedComponent name='Abc Hostal' text='4 bed room is free' image={require('../man.png')}/>
                    </div>
                    <div className='createPost bgBlue'>
                        <h3 className='fgWhite'>Create New Post</h3>
                        <Link to=''>
                          <button className='bgRed fgWhite'>Create</button>
                        </Link>
                        
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