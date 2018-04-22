import React, { Component } from 'react';

export default class NavigationSidebar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    if (this.props.type == 'customer') {
      return(
        <div className="sidebar">
          <div className="sidebar-menu">
            <li>SHOP</li>
            <li>ORDERS</li>
            <li>ACCOUNT</li>
          </div>
        </div>
      );
    }
    else if (this.props.type == 'employee') {
      return(
        <div className="sidebar">
          <div className="sidebar-menu">
            <li>SHOP</li>
            <li>ORDERS</li>
            <li>ACCOUNT</li>
          </div>
        </div>
      );
    }
  }
}