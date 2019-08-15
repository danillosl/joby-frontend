import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./component3.css";

import { actions } from "./Component3Redux";
import Component3create from "./Component3Create";
import Component3List from "./Component3List";
import Component3Update from "./Component3Update";

class Component3Container extends Component {
  render() {
    const { match } = this.props;
    return (
      <Router>
        <div className="Component3">
          <nav className="subnav">
            <ul>
              <li>
                <Link to={`${match.path}/`}>list component 3</Link>
              </li>
              <li>
                <Link to={`${match.path}/create`}>create component 3</Link>
              </li>
              <li>
                <Link to={`${match.path}/${3}/update`}>update component 3</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Switch>
              <Route path={`${match.path}/`} exact component={Component3List} />
              <Route path={`${match.path}/create`} component={Component3create} />
              <Route path={`${match.path}/:id/update`} component={Component3Update} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ component3: state.component3 });
const mapDispatchToProps = dispatch => ({
  loadComponents: () => dispatch(actions.loadComponents()),
  createComponent: component => dispatch(actions.createComponent(component)),
  updateComponent: component => dispatch(actions.updateComponent(component)),
  removeComponent: component => dispatch(actions.removeComponent(component))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component3Container);
