import React, { Component, useEffect } from "react";
import NavBar from "../components/navComponent";
import Joi, { errors } from "joi-browser";
import messageService from "../services/messageService";
import auth from "../services/authSerivce";

import man from "../man.png";

//========================================================
import "../colors.css";
import "./styles/chat.css";
import userService from "../services/userService";
//============================================================================================================

class Chat extends Component {
  state = {
    chats: [],
    data: {
      message_body: "",
      reciever_user: "",
    },
    errors: {},
  };
  //============================================================================================================
  schema = Joi.object({
    message_body: Joi.string().required(),
  });

  validateInput = (data) => {
    const result = Joi.validate(data, this.schema);
    const errors = {};
    if (!result.error) return {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  changeHandler = ({ currentTarget: input }) => {
    // sync the state with the form
    const { data } = this.state;
    data[input.name] = input.value;
    this.setState({ data });

    const errors = this.validateInput(data);
    this.setState({ errors });
  };

  sendHandler = async (arg) => {
    let { data, messages } = this.state;
    if (errors) {
      alert("Please Write Something in the Message Box...");
      return;
    }
    try {
      const { data: message } = await messageService.sendMessage(
        data.message_body,
        data.currentChat
      );
      messages = [...messages, message];
      data.message_body = "";
      this.setState({ data, messages });
    } catch (ex) {
      console.log(ex);
      alert("Can't send Message...");
    }
  };

  async componentDidMount() {
    // const { data } = await messageService.getChats();
    const { data } = await userService.getAllUsers();
    this.setState({ chats: data });

    const { data: messages } = await messageService.getMessages();
    const user = auth.getUser();
    this.setState({ messages, user });
    messageService.socket.on(user._id, (message) => {
      this.state.messages = [...this.state.messages, message];
      data.message_body = "";
      this.setState({ messages: this.state.messages });
    });
  }

  render() {
    const { data, messages, user } = this.state;

    return (
      <div className="bgBlack chatContainter">
        <NavBar />
        <div className="innerChatComponent">
          <div className="chatsFeed bgBlue">
            {this.state.chats.map((chat) => (
              <this.chatUser
                key={chat._id}
                name={chat.email}
                handleOpenChat={() => {
                  this.setState({
                    data: { currentChat: chat._id },
                  });
                }}
              />
            ))}
          </div>
          {this.state.data.currentChat && (
            <div className="chat">
              {messages.map((message) => {
                if (
                  message.sender_user == data.currentChat &&
                  message.reciever_user == user._id
                )
                  return (
                    <this.message
                      key={message._id}
                      text={message.message_body}
                    />
                  );
                else if (
                  message.sender_user == user._id &&
                  message.reciever_user == data.currentChat
                )
                  return (
                    <this.response
                      key={message._id}
                      text={message.message_body}
                    />
                  );
              })}
              <this.chatBox
                message_body={data.message_body}
                changeHandler={this.changeHandler}
                sendHandler={this.sendHandler}
              />
            </div>
          )}
          {!this.state.data.currentChat && "Select User to start Chat!"}
        </div>
      </div>
    );
  }
  //============================================================================================================
  chatUser(props) {
    const styleSheet = {
      avatar: {
        borderRadius: 25,
        height: 50,
        width: 50,
      },
      container: {
        alignItems: "center",
        borderRadius: 25,
        display: "flex",
        height: 64,
        margin: 3,
        padding: 7,
      },
      name: {
        margin: 10,
      },
    };
    return (
      <div
        className="bgBlack"
        style={styleSheet.container}
        onClick={props.handleOpenChat}
      >
        <img src={man} className="bgWhite" style={styleSheet.avatar} />
        <p className="fgWhite" style={styleSheet.name}>
          {props.name}
        </p>
      </div>
    );
  }

  //============================================================================================================
  chatBox(props) {
    const styleSheet = {
      button: {
        backgroundColor: "#33b",
        borderColor: "#aaa",
        borderRadius: 20,
        color: "#fff",
        fontSize: 25,
        height: 45,
        width: 80,
      },
      container: {
        alignItems: "center",
        bottom: 0,
        borderRadius: 6,
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "space-evenly",
        position: "absolute",
        padding: 10,
        width: "100%",
      },
      input: {
        borderColor: "#aaa",
        borderRadius: 20,
        outline: "none",
        padding: 13,
        width: "70%",
      },
    };

    return (
      <div className="bgBlack" style={styleSheet.container}>
        <input
          type="text"
          placeholder="Type a message"
          name="message_body"
          value={props.message_body}
          onChange={props.changeHandler}
          style={styleSheet.input}
        />
        <button style={styleSheet.button} onClick={props.sendHandler}>
          &#x27A4;
        </button>
      </div>
    );
  }

  //============================================================================================================

  message(props) {
    const styleSheet = {
      container: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
      },
      message: {
        backgroundColor: "#b33",
        borderRadius: 15,
        color: "#fff",
        maxWidth: "50%",
        margin: 10,
        padding: 20,
        wordWrap: "break-word",
      },
    };
    return (
      <div style={styleSheet.container}>
        <p style={styleSheet.message}>{props.text}</p>
      </div>
    );
  }
  //============================================================================================================
  response(props) {
    const styleSheet = {
      container: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      },
      message: {
        backgroundColor: "#33b",
        borderRadius: 15,
        color: "#fff",
        maxWidth: "50%",
        margin: 10,
        padding: 20,
        wordWrap: "break-word",
      },
    };
    return (
      <div style={styleSheet.container}>
        <p style={styleSheet.message}>{props.text}</p>
      </div>
    );
  }
}
//============================================================================================================
export default Chat;
