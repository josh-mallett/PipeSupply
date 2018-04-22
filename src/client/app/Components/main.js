import React, { Component } from 'react';
import CustomerContainer from './Customers/customerContainer';

export default class Main extends Component {
  constructor () {
    super();

    this.state = {
      
    }
  }

  render() {
    return(
      <div>
        <CustomerContainer />
      </div>
    );
  }
}