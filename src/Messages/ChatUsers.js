import React, { Component } from 'react';

class ChatUsers extends Component {
  render() {
    const users = this.props.users.map((user, i) => {
      const comma = this.props.users.length - 1 === i ? "" : ", ";
      const selected_user = user===this.props.current_user ? "chat__current-user" : "";
      return (
        <span key={user}>
          <span className={selected_user}>{user}</span>{comma}
        </span>
      )
    });
    return (
      <ul className="chat__users">
        {users}
      </ul>
    )
  }
}

export default ChatUsers;
