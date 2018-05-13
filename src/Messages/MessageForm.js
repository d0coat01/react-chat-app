import React, { Component } from 'react';
class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      message: event.target.value
    })
  }
  handleSubmit(event) {
    this.props.handleSubmit(this.state.message);
    this.messageInput.value = "";
    event.preventDefault();
  }
  render() {
    return (
      <div className="room__send">
        <form name="send" autoComplete="off" onSubmit={this.handleSubmit}>
            <input type="text" className="room__message" name="message"
            ref={(el) => {this.messageInput = el;}}
            onChange={this.handleChange} placeholder="Type of a message..." />
            <input type="submit" className="room__submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default MessageForm;
