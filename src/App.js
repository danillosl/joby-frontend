import React from "react";
import store from "./Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header/Header";
import Component1 from "./Component1/Component1Container";
import Component2 from "./Component2/Component2Container";
import Component3 from "./Component3/Component3Container";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Switch>
              <Route path="/component1" component={Component1} />
              <Route path="/component2" component={Component2} />
              <Route path="/component3" component={Component3} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
