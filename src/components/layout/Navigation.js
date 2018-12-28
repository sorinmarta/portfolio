import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="top-navigation">
        <div className="top-navigation-left">
          <a href={this.props.left} className="top-navigation-btn-left">
            {this.props.left}
          </a>
        </div>
        <div className="top-navigation-right">
          <a href={this.props.right} className="top-navigation-btn-right">
            {this.props.right}
          </a>
        </div>
        <div className="clearfix" />
      </nav>
    );
  }
}
