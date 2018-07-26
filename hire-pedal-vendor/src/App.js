import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,Redirect,
  Link
} from 'react-router-dom';
import Home from './views/Home';

import axios from "axios"


class App extends Component {

  constructor(props) {
    super(props);
    //axios.defaults.headers.common['username'] = 'admin';
    //axios.defaults.headers.common['password'] = 'pa$$w0rd';
    axios.defaults.headers.common['Authorization'] = 'Basic YWRtaW46cGEkJHcwcmQ=';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    
  }

  render() {
    return (
        <React.Fragment>
          <Home/>
        </React.Fragment>
    );
  }

}

export default App;