import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Jobs from "../Jobs/Jobs";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <SearchBar history={this.props.history} />
        <Jobs match={this.props.match} history={this.props.history} />
      </div>
    );
  }
}
