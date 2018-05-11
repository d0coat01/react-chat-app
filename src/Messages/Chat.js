import React, { Component } from 'react';

class Chat extends Component {
  render() {
    return (
      <ul className="chat__messages">
       <li>
        <div className="chat__sender">Nick</div>
        <div className="chat__message-text">Hello</div>
       </li>
       <li className="chat__current-user-message">
        <div className="chat__sender">Nick</div>
        <div className="chat__message-text">Greetings</div>
       </li>
      </ul>
    )
  }
}

export default Chat;
