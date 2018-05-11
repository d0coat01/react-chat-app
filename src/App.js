import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import Login from './Login/Login';
import Messages from './Messages/Messages';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: sessionStorage.getItem('username') || null,
    }
  }
  usernameRedirect() {
    if(!this.state.username) {
      return (<Redirect to="/login" />)
    }
  }
  render() {
    const usernameRedirect = this.usernameRedirect();
    return (
        <Router>
          <div className="app-container">
            {usernameRedirect}
            <Route path='/login' component={Login} />
            <Route path='/messages' component={Messages} />
            <Route path='/logout' component={Login} />
          </div>
        </Router>
    );
  }
}

export default App;
