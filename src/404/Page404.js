import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./page404.scss";

export default class Page404 extends Component {
  render() {
    return (
      <div className="page404">
        <h3>Oops! Page not found</h3>
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
        <h2>
          we are sorry, but the page you requested was not found, <Link to="/">let's go back</Link>{" "}
        </h2>
      </div>
    );
  }
}
