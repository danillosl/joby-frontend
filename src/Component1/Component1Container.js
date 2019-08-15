import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./component1.css";

import { actions } from "./Component1Redux";
import Component1create from "./Component1Create";
import Component1List from "./Component1List";
import Component1Update from "./Component1Update";

class Component1Container extends Component {
  render() {
    const { match } = this.props;
    return (
      <Router>
        <div className="Component1">
          <nav className="subnav">
            <ul>
              <li>
                <Link to={`${match.path}/`}>list component 1</Link>
              </li>
              <li>
                <Link to={`${match.path}/create`}>create component 1</Link>
              </li>
              <li>
                <Link to={`${match.path}/${1}/update`}>update component 1</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Switch>
              <Route path={`${match.path}/`} exact component={Component1List} />
              <Route path={`${match.path}/create`} component={Component1create} />
              <Route path={`${match.path}/:id/update`} component={Component1Update} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ component1: state.component1 });
const mapDispatchToProps = dispatch => ({
  loadComponents: () => dispatch(actions.loadComponents()),
  createComponent: component => dispatch(actions.createComponent(component)),
  updateComponent: component => dispatch(actions.updateComponent(component)),
  removeComponent: component => dispatch(actions.removeComponent(component))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component1Container);
