import React, { Component } from 'react';
import './Rooms.css';

class Rooms extends Component {
  render() {
    const rooms = this.props.rooms.map((room) => (
      <li key={room.id} onClick={() => this.props.selectRoom(room)}>{room.name}</li>
    ));
    return (
      <ul className="rooms">
        {rooms}
      </ul>
    )
  }
}

export default Rooms;
