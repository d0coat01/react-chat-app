import React, { Component } from 'react';
import './Login.css';
import saveUser from '../api/saveUser';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      username: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    saveUser(this.state.username);
    this.props.history.push('/messages');
    event.preventDefault();
  }
    render() {
      return(
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <input className="login__username" type="text" onChange={this.handleChange} name="username" placeholder="What is your name?"/>
            <button type="submit" className="login__submit">Go to chat!</button>
          </form>
        </div>
      )
  }
}

export default Login;
