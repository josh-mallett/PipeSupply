import React, { Component } from 'react';
import NavigationContainer from '../Navigation/navigationContainer';
import Customer from './customer';

export default class CustomerContainer extends Component {
  constructor () {
    super();

    this.state = {
    }
  }
  
  render() {
    return(
      <div>
        <NavigationContainer type="customer" />
        <Customer pageType={this.state.activePage}/>
      </div>
    );
  }
}