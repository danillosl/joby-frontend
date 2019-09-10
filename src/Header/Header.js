import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.scss";
export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="header-container">
          <div className="main-header__logo">
            <h1>
              <Link to="/">JOBY</Link>
            </h1>
          </div>
          <a className="main-header__made-by" href="https://danillolisboa.com" target="_blank" rel="noopener noreferrer">
            Made by <span className="main-header__accent">Danillo Lisboa</span>
          </a>
        </div>
      </header>
    );
  }
}
