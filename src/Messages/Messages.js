import React, { Component } from 'react';
import './Messages.css';
import Navigation from './Navigation';
import Chat from './Chat';
import ChatUsers from './ChatUsers';
class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: sessionStorage.getItem('username') || null,
      selected_room: null,
      users: []
    };
    this.setupRoom(sessionStorage.getItem('selected_room_id'));
  }
  selectRoom(room) {
    sessionStorage.setItem('selected_room_id', room.id);
    this.setupRoom(room.id);
  }
  setupRoom(room_id) {
    const id = parseInt(room_id, 10);
    if(typeof id !== "number") return null;
    fetch('http://localhost:8080/api/rooms/' + id)
    .then(response => {
        return response.json();
    })
    .then(roomDetails => {
      const room = {name: roomDetails.name, id: roomDetails.id};
      this.setState({
        selected_room: room,
        users: roomDetails.users
      });
    });
  }
  render() {
      const room_id = (this.state.selected_room && typeof parseInt(this.state.selected_room.id, 10) === "number") ? this.state.selected_room.id : null;
      const current_user = this.state.username;
      const users = this.state.users;
      const header = this.state.selected_room ? this.state.selected_room.name : "Welcome, " + current_user + ". Please select a room.";
      return (
        <div className="messages">
          <Navigation username={current_user} selectRoom={(room) => this.selectRoom(room)}/>
          <div className="chat">
            <h1>{header}</h1>
            <ChatUsers users={users} current_user={current_user} />
            <Chat room_id={room_id} current_user={current_user}/>
          </div>
        </div>
      )
  }
}

export default Messages;
