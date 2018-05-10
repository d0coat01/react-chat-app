import React, { Component } from 'react';
import {
  WithRouter,
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Login from './Login/Login';
import logo from './logo.svg';
import './App.css';

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

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
            <Route path='/public' component={Public} />
            <Route path='/protected' component={Protected} />
            <Route path='/login' component={Login} />
            <Route path='/messages' component={Public} />
          </div>
        </Router>
    );
  }
}

export default App;
