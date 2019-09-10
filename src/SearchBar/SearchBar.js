import React, { Component } from "react";

import { connect } from "react-redux";

import { update } from "../SearchBar/SearchBarRedux";

import "./SearchBar.scss";

class SearchBar extends Component {
  handleChange = event => {
    this.props.update(event.target.value);
  };
  handleSubmit = evt => {
    const { searchTerm } = this.props;

    evt.preventDefault();

    this.props.history.push(`/search/${searchTerm}`);
  };
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit} className="search-bar__form" action="">
          <h1 className="search-bar__header">Search for your dream job</h1>
          <div className="search-bar__box">
            <input placeholder="job description, tag, category..." className="search-bar__input" type="text" name="search-term" id="search-term" onChange={this.handleChange} value={this.props.searchTerm} />
            <button className="search-bar__submit-button">
              <i style={{ color: "blue" }} className="fas fa-search" />
            </button>
          </div>
          <p className="search-bar__paragraph">
            <span>{this.props.total}</span> job offers found
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchBar.searchTerm,
  total: state.jobs.total
});
const mapDispatchToProps = dispatch => ({
  update: (...params) => dispatch(update(...params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
