
import React, { Component } from 'react';
import NavBar from '../components/navComponent';
import man from '../man.png';

//========================================================
import '../colors.css';
import './styles/chat.css';

//============================================================================================================

class Chat extends Component {
    state = { 
        chats:[{avatar:man, name: 'M.Ahsan'},
               {avatar:man, name: 'abc'},
               {avatar:man, name: 'ahsan'},
            ],
        
     }
//============================================================================================================
    render() { 
        return ( 
            <div className='bgBlack chatContainter'>
                <NavBar/>
                <div className='innerChatComponent'>
                    <div className='chatsFeed bgBlue'>
                        {this.state.chats.map(chat=><this.chatUser avatar={chat.avatar} name={chat.name}/>)}
                    </div>
                    <div className='chat'>
                        <this.message text='Hi! Sir'/>
                        <this.response text='Hello! How may I help you Sir'/>
                        <this.chatBox/>
                    </div>
                </div>
            </div>
         );
    }
//============================================================================================================
    chatUser(props){
        const styleSheet = {
                    avatar:{
                        borderRadius:25,
                        height:50,
                        width:50,  
                    },
                    container:{
                        alignItems:'center',
                        borderRadius:25,
                        display:'flex', 
                        height:64,
                        margin:3, 
                        padding:7,
                    },
                    name:{
                        margin:10,
                    },
                }
        return(
            <div className='bgBlack' style={styleSheet.container} onClick={()=>{}}>
                <img src={props.avatar} className='bgWhite' style={styleSheet.avatar}/>
                <p className='fgWhite' style={styleSheet.name}>{props.name}</p>
            </div>
        );
    }

//============================================================================================================
chatBox(props){
    const styleSheet = {
                button:{
                    backgroundColor:'#33b',
                    borderColor:'#aaa',
                    borderRadius:20,
                    color:'#fff',
                    fontSize:25,
                    height:45,
                    width:80,  
                },
                container:{
                    alignItems:'center',
                    bottom:0,
                    borderRadius:6,
                    backgroundColor:'transparent',
                    display:'flex',
                    justifyContent:'space-evenly',
                    position:'absolute',
                    padding:10,
                    width:'100%',
                },
                input:{
                    borderColor:'#aaa',
                    borderRadius:20,
                    outline:'none',
                    padding:13,
                    width:'70%',
                },
            }
    return(
        <div className='bgBlack' style={styleSheet.container}>
            <input type="text" placeholder='Type a message' style={styleSheet.input}/>
            <button style={styleSheet.button} 
                onClick={()=>{}}
                >&#x27A4;</button>
        </div>
    );
}

//============================================================================================================

    message(props){
        const styleSheet={
                    container:{
                        display:'flex',
                        justifyContent:'flex-start',
                        width: '100%',
                    },
                    message:{
                        backgroundColor:'#b33',
                        borderRadius:15,
                        color:'#fff',
                        maxWidth:'50%',
                        margin:10,
                        padding:20,
                        wordWrap: 'break-word',
                    }
                }
        return(
            <div style={styleSheet.container}>
                <p style={styleSheet.message}>{props.text}</p>
            </div>
        );
    }
//============================================================================================================
    response(props){
        const styleSheet={
                    container:{
                        display:'flex',
                        justifyContent:'flex-end',
                        width: '100%',
                    },
                    message:{
                        backgroundColor:'#33b',
                        borderRadius:15,
                        color:'#fff',
                        maxWidth:'50%',
                        margin:10,
                        padding:20,
                        wordWrap: 'break-word',
                    }
                }
        return(
            <div style={styleSheet.container}>
                <p style={styleSheet.message}>{props.text}</p>
            </div>
        );
    }   
}
//============================================================================================================
export default Chat;