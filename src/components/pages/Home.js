import React, { Component } from "react";
import Avatar from "../../img/avatar-image.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="homepage-wrap">
        <div className="home-container">
          <img src={Avatar} alt="Avatar" className="small-avatar" />
          <h1 className="home-name">Sorin Marta</h1>
          <h2 className="home-subtitle">Full-Stack Developer</h2>
          <div className="home-navigation">
            <a href="/about" className="home-left-btn">
              About me
            </a>
            <a href="/portfolio" className="home-right-btn">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    );
  }
}
