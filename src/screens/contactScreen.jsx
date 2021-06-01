import React, { Component } from 'react';
import NavBar from '../components/navComponent';
import './styles/about.css';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='about'>
                <NavBar/>
                <h1>Contact Us</h1>
                <hr />
                <div className='aboutContainer'>
                    <div className='aboutBox'>
                    <h3>Contact Us!</h3>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Subject"/>
                    </div>
                    <div className='aboutBox'>
                        <h3>Your Message!</h3>
                        <textarea placeholder="Message!"></textarea>
                        <button>Submit</button>
                    </div>
                    <div className='aboutBox'>
                        <h3>Contacts</h3>
                        <p>&#9993; abc@gmail.com</p>
                        <p>&#128241; +920000000000</p>
                        <p>&#9993; abc@gmail.com</p>
                        <p>&#128241; +920000000000</p>
                    </div>
                </div>
            </div> 
         );
    }
}
 
export default Contact;