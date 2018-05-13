import React, { Component } from 'react';
import {getMessages, sendMessage} from '../api/MessagesApi';
import ChatMessages from './ChatMessages';
import MessageForm from './MessageForm';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  componentWillReceiveProps(nextProps) {
    let self = this;
    if (this.props.room_id !== nextProps.room_id && typeof parseInt(nextProps.room_id, 10) === "number") {
      getMessages(nextProps.room_id)
      .then(function(messages){
        self.setState({
          messages: messages
        });
      });
    }
  }
  handleSendMessage(message) {
    if(!message || message.length < 1) return null;
    const current_user = this.props.current_user;
    const room_id = this.props.room_id;
    const response = sendMessage(room_id, message, current_user);
    if(!response) return null;
    response.then(r => {
      if(r && r.message==="OK!") {
        const messages = this.state.messages.slice();
        messages.push({message:message, name:current_user});
        this.setState({
          messages : messages
        });
      }
    })
  }
  render() {
    const messages = this.state.messages;
    const current_user = this.props.current_user;
    return (
      <div>
        <ChatMessages messages={messages} current_user={current_user} />
        <MessageForm handleSubmit={(message)=>{this.handleSendMessage(message)}}/>
      </div>
    )
  }
}

export default Chat;
