import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="main-footer__logo">
          <h1>
            <Link to="/">JOBY</Link>
          </h1>
        </div>
        <p className="main-footer__copyright">Copyright &copy; 2019</p>
      </footer>
    );
  }
}
