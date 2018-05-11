import React, { Component } from 'react';
import Rooms from './Rooms';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state= {
      rooms: [],
      activeTime: '10 minutes',
    };
    this.getRooms();
  }
  getRooms() {
    fetch('http://localhost:8080/api/rooms')
    .then(response => {
      return response.json();
    })
    .then(rooms => {
      this.setState({rooms: rooms});
    });
  }
  render() {
    const rooms = this.state.rooms;
    return (
      <div className="nav">
        <div className="nav__profile">
          <div className="nav__user">
            {this.props.username}
          </div>
          <div className="nav__online_time">
            Active {this.state.activeTime}
          </div>
        </div>
        <Rooms rooms={rooms} selectRoom={(room) => this.props.selectRoom(room)}/>
      </div>
    )
  }
}

export default Navigation;
