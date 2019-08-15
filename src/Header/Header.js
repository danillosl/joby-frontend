import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";
export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <h1>react-boilerplate</h1>
        <nav>
          <ul>
            <li>
              <Link to="/component1">Component1</Link>
            </li>
            <li>
              <Link to="/component2">Component2</Link>
            </li>
            <li>
              <Link to="/component3">Component3</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
