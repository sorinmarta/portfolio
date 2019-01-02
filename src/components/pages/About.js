import React, { Component } from "react";
import Navigation from "../layout/Navigation";
import MediumAvatar from "../../img/medium-avatar.png";

export default class About extends Component {
  render() {
    return (
      <div className="about-wrap">
        <Navigation left="portfolio" right="home" />
        <h1 className="page-title">About me</h1>
        <div className="about-inner-wrap">
          <div className="about-section-1">
            <div className="about-image-wrap">
              <img
                src={MediumAvatar}
                alt="Sorin Marta"
                className="medium-avatar-image"
              />
            </div>
            <div className="about-summary-wrap">
              <p className="about-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sit amet diam non purus tincidunt viverra.
              </p>
              <p className="about-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sit amet diam non purus tincidunt viverra.
              </p>
              <p className="about-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sit amet diam non purus tincidunt viverra.
              </p>
              <p className="about-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sit amet diam non purus tincidunt viverra.
              </p>
            </div>
            <div className="about-form-wrap">
              <form action="" className="about-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Sorin Marta"
                    className="about-input"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="about-input"
                    id="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <br />
                  <input
                    type="text"
                    placeholder="I have this idea for an application..."
                    className="about-input"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <br />
                  <textarea
                    name="message"
                    id="message"
                    className="about-input"
                    cols="30"
                    rows="10"
                    placeholder="My idea is this one and I want to talk with you about it to find a solution..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send"
                    id="send"
                    className="about-page-btn"
                  />
                  <div className="clearfix" />
                </div>
              </form>
            </div>
          </div>
          <div className="about-section-2">
          </div>
        </div>
      </div>
    );
  }
}
