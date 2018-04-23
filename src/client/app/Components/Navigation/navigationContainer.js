import React, { Component } from 'react';
import NavigationTopbar from './navigationTopbar';
import NavigationSideBar from './navigationSidebar';

export default class NavigationContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activePage: 'shop'
    }
  }

  render() {
    return (
      <div>
        <NavigationTopbar />
        <NavigationSideBar 
          type={this.props.type} 
          activePage={this.state.activePage}
          changePage={this.props.changePage}
        />
      </div>
    );
  }
}