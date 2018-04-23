import React, { Component } from 'react';

export default class AccountContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return(
      <div className="account">
        <div className="account-title">
          <span>Account Information</span>
        </div>
        <div className="account-info">
          <li>Name: </li>
          <li>Username: </li>
          <li>Company: </li>
          <li>Email: </li>
          <li>Address: </li>
        </div>
      </div>
    );
  }
}