import React, { Component } from 'react';

export default class Customer extends Component {
  constructor () {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return(
      <div className="customer-page">
        <MainNavigation type="customer" />
      </div>
    );
  }
}