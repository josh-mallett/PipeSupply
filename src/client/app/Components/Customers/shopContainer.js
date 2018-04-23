import React, { Component } from 'react';

export default class ShopContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="shop">
        <div className="shop-item">
          <div className="item-name">
            <h1>Item Title</h1>
          </div>
          <div className="buy-button">
            <button>BUY</button>
          </div>
        </div>
        <div className="shop-item">
          <div className="item-name">
            <h1>Item Title</h1>
          </div>
          <div className="buy-button">
            <button>BUY</button>
          </div>
        </div>
        <div className="shop-item">
          <div className="item-name">
            <h1>Item Title</h1>
          </div>
          <div className="buy-button">
            <button>BUY</button>
          </div>
        </div>
        <div className="shop-item">
          <div className="item-name">
            <h1>Item Title</h1>
          </div>
          <div className="buy-button">
            <button>BUY</button>
          </div>
        </div>
      </div>
    );
  }
}