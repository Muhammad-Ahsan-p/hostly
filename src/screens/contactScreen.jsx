import React, { Component } from 'react';
import NavBar from '../components/navComponent';
import '../colors.css';
import './styles/about.css';
class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='about bgBlack'>
                <NavBar/>
                <h1 className='fgWhite fontFamily'>Contact Us</h1>
                <div className='aboutContainer bgBlack'>
                    <div className='aboutBox'>
                        <h3>Contact Us here!</h3>
                        <p>If your facing any problem or have any suggestions about the 
                            Hostly. Plese contact us here. 
                        </p>
                    </div>
                    <div className='aboutBox'>
                    <h3>Fill this form!</h3>
                        <input type="text" placeholder="Your name"/>
                        <input type="email" placeholder="Your Email"/>
                        <input type="text" placeholder="Your Phone Number"/>
                        <input type="text" placeholder="Email Subject"/>
                    </div>
                    <div className='aboutBox'>
                    <h3></h3>
                        <textarea placeholder="Type Your Message here!"></textarea>
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