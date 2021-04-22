import React, { Component } from 'react';
import NavBar from '../components/navComponent';

import './styles/about.css'
import '../colors.css'


class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='about bgBlack'>
                <NavBar/>
                <h1 className='fgWhite fontFamily'>About Us</h1>
                <div className='aboutContainer bgBlack'>
                    <div className='aboutBox'>
                        <h3>What is Hostly?</h3>
                        <p>Hostly is a Social Media Platform that allow the students to
                            find desired hostal for them. It also allow peoples to post
                            the add when there is a free room available for rent.
                        </p>
                    </div>
                    <div className='aboutBox'>
                    <h3>How much Costs?</h3>
                        <p>Hostly is a free Social Media Platform that allow any one to 
                            use it freely.
                        </p>
                    </div>
                    <div className='aboutBox'>
                    <h3>Why developed?</h3>
                        <p>Hostly is developed as a symistor project in COMSATS Attock.
                            It is an idea that will help people to solve there problem.
                        </p>
                    </div>
                    <div className='aboutBox'>
                    <h3>About Developers!</h3>
                        <p>Hostly is developed using MERN stack and it is developed by
                            Muhammad Ahsan and Rizwan Amjad.
                        </p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default About;