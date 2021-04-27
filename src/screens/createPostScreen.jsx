import React, { Component } from 'react';
import '../colors.css';
import './styles/styles.css';
import './styles/createPost.css';


class CreatePost extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='bgBlue center'>
                <div className='bgBlack createPostContainer'>
                    <h2 className='fgWhite'>Create New Post</h2>
                    <textarea placeholder="Type details Here!"></textarea>
                    <input type="email" placeholder='Type Your Email!' />
                    <input type="email" placeholder='Type Your Phone Number!' />
                    <input type="file" className='fgWhite'/>
                    <textarea placeholder="Type Your address Here!"></textarea>
                    <button className='bgRed fgWhite'>Publish</button>

                </div>
            </div>
         );
    }
}
 
export default CreatePost