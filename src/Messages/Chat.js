import React, { Component } from 'react';
import {getMessages, sendMessage} from '../api/MessagesApi';
import ChatMessages from './ChatMessages';
import MessageForm from './MessageForm';
import io from 'socket.io-client';

class Chat extends Component {
  constructor(props) {
    super(props);
    let self = this;
    this.state = {
      messages: []
    };
    this.socket = io('http://localhost:8080');
    this.socket.on('chat message', function(msg, room_id){
      if(room_id !== self.props.room_id) return null;
      const messages = self.state.messages.slice();
      messages.push(msg);
      self.setState({
        messages : messages
      });
    });
  }
  componentWillReceiveProps(nextProps) {
    let self = this;
    //Check to see if the room id will change. If the id will change, retrieve the messages and set state.
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
    //Save message.
    if(!message || message.length < 1) return null;
    const current_user = this.props.current_user;
    const room_id = this.props.room_id;
    const response = sendMessage(room_id, message, current_user);
    if(!response) return null;
    response.then(r => {
      if(r && r.message) {
        const messages = this.state.messages.slice();
        messages.push({message:message, name:current_user});
        this.socket.emit('chat message', r, room_id);
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
