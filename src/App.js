import React from "react";
import store from "./Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "./mainPage/MainPage";
import JobPage from "./Jobs/JobPage/JobPage";
import Page404 from "./404/Page404";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/search/:search" component={MainPage} />
            <Route path="/company/:name" component={MainPage} />
            <Route path="/tag/:tag" component={MainPage} />
            <Route path="/job/:id" component={JobPage} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
