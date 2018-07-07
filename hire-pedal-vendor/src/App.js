import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,Redirect,
  Link
} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import axios from "axios"


class App extends Component {

  constructor(props) {
    super(props);
    //axios.defaults.headers.common['username'] = 'admin';
    //axios.defaults.headers.common['password'] = 'pa$$w0rd';
    axios.defaults.headers.common['Authorization'] = 'Basic YWRtaW46cGEkJHcwcmQ=';
    
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </React.Fragment>
      </Router>
    );
  }

}

export default App;