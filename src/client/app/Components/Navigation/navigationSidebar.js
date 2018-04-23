import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/customer/shop">
              <li>SHOP</li>
            </Link>
            <Link to="/customer/orders">
              <li>ORDERS</li>
            </Link>
            <Link to="/customer/account">
              <li>ACCOUNT</li>
            </Link>
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