import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./component2.css";

import { actions } from "./Component2Redux";
import Component2create from "./Component2Create";
import Component2List from "./Component2List";
import Component2Update from "./Component2Update";

class Component2Container extends Component {
  render() {
    const { match } = this.props;
    return (
      <Router>
        <div className="Component2">
          <nav className="subnav">
            <ul>
              <li>
                <Link to={`${match.path}/`}>list component 2</Link>
              </li>
              <li>
                <Link to={`${match.path}/create`}>create component 2</Link>
              </li>
              <li>
                <Link to={`${match.path}/${2}/update`}>update component 2</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Switch>
              <Route path={`${match.path}/`} exact component={Component2List} />
              <Route path={`${match.path}/create`} component={Component2create} />
              <Route path={`${match.path}/:id/update`} component={Component2Update} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ component2: state.component2 });
const mapDispatchToProps = dispatch => ({
  loadComponents: () => dispatch(actions.loadComponents()),
  createComponent: component => dispatch(actions.createComponent(component)),
  updateComponent: component => dispatch(actions.updateComponent(component)),
  removeComponent: component => dispatch(actions.removeComponent(component))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component2Container);
