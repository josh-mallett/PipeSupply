import React, { Component } from 'react';
import CustomerContainer from './Customers/customerContainer';
import axios from 'axios';

export default class Main extends Component {
  constructor () {
    super();

    this.state = {
      loggedIn: true,
      loginType: 'customer',
      userName: ''
    }
  }

  render() {
    if (this.state.loggedIn == false) {
      return(null);
    }
    else if (this.state.loggedIn && this.state.loginType == 'customer') {
      return(
        <div>
          <CustomerContainer username={this.state.userName}/>
        </div>
      );
    } 
    else if (this.state.loggedIn && this.state.loginType == 'employee') {
      return(null);
    }
    else {
      return(null);
    }
  }
}