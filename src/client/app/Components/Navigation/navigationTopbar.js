import React, { Component } from 'react';

export default class NavigationTopbar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="main-header">
        <div className="title">
          <div className="ps-logo"></div>
          <div className="ps-title">
            <span>Pipe Supply</span>
          </div>
        </div>
      </div>
    );
  }
}