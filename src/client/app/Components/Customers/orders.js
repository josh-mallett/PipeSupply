import React, { Component } from 'react';

export default class Orders extends Component {
  constructor (props) {
    super(props);

    this.state = {
      pageType: 'shop'
    }
  }



  render() {
    return(
      <div className="customer-page">
      { this.state.pageType == 'shop' &&
        <div className="shop">
        
        </div>
      }
      { this.state.pageType == 'orders' &&
        <div className="orders">

        </div>
      }
      { this.state.pageType == 'account' &&
        <div className="account">

        </div>
      }
      </div>
    );
  }
}