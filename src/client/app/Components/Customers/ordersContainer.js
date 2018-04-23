import React, { Component } from 'react';

export default class OrdersContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
    }
  }
  
  render() {
    return(
      <div className="orders">
        <div className="orders-title">
          <span>Your Orders</span>
        </div>
        <div className="order">
          <div className="order-title">
            <span>Order 1</span>
          </div>
          <div className="order-info">
            <li>Products Ordered: </li>
            <li>Date Ordered: </li>
            <li>Shipping Date: </li>
            <li>Arrival Date: </li>
          </div>
        </div>
      </div>
    );
  }
}