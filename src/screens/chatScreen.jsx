import React, { Component } from 'react';
import NavBar from '../components/navComponent';

import '../colors.css';
import './styles/chat.css';

class Chat extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='bgBlack chatContainter'>
                <NavBar/>
                <div className='innerChatComponent'>
                    <div className='chatsFeed bgBlue'>

                    </div>
                    <div className='chat'>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Chat;