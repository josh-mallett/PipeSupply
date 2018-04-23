import React, { Component } from 'react';
import ShopContainer from './shopContainer';
import AccountContainer from './accountContainer';
import OrdersContainer from './ordersContainer';
import { Route } from 'react-router-dom';


export default class Customer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      pageType: 'orders'
    }
  }

  componentWillRecieveProps(nextProps) {
    this.setState({
      pageType: nextProps.pageType
    });
    
    console.log(this.state.pageType);
  }


  render() {
    return(
      <div className="customer-page">
        <Route path="/customer/shop" component={ShopContainer} />
        <Route path="/customer/orders" component={OrdersContainer} />
        <Route path="/customer/account" component={AccountContainer} />
      </div>
    );
  }
}