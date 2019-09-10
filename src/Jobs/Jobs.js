import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { listJobsBysearchTerm, listJobsByCompany, listJobsByTag, listJobs, toggleError } from "./JobRedux";

import Job from "./Job/Job";
import Loader from "../Loader/Loader";
import "./Jobs.scss";

class Jobs extends Component {
  componentDidMount() {
    this.loadJobs();
  }

  handleLoadJobs = evt => {
    const { page } = this.props;

    this.loadJobs(page + 1);
  };

  componentDidUpdate = prevProps => {
    if (this.props.match.url !== prevProps.match.url) {
      this.loadJobs();
    }
  };

  loadJobs = page => {
    const [path, param] = this.props.match.url.substr(1).split("/");

    switch (path) {
      case "company":
        this.props.listJobsByCompany(param, page);
        break;
      case "tag":
        this.props.listJobsByTag(param, page);
        break;
      case "search":
        this.props.listJobsBysearchTerm(param, page);
        break;
      default:
        this.props.listJobs(undefined, page);
        break;
    }
  };

  render() {
    const { loading, error, toggleError, history, moreData, subLoading } = this.props;

    if (error === "404") {
      toggleError();
      return <Redirect push to="/404" />;
    }

    return (
      <div className="jobs">
        <div style={{ display: !loading ? "none" : "block" }} className="loader">
          <Loader />
        </div>

        <div style={{ display: loading ? "none" : "block" }}>
          <div className="jobs__container">
            {this.props.jobs.map(job => (
              <Job key={job._id} history={history} job={job} />
            ))}

            <button style={{ display: moreData ? "block" : "none" }} onClick={this.handleLoadJobs} className="jobs__button">
              {!subLoading ? "Load more jobs" : "loading..."}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.data,
  page: state.jobs.page,
  error: state.jobs.error,
  loading: state.jobs.loading,
  moreData: state.jobs.moreData,
  subLoading: state.jobs.subLoading,
  searchTerm: state.searchBar.searchTerm
});
const mapDispatchToProps = dispatch => ({
  listJobsBysearchTerm: (...params) => dispatch(listJobsBysearchTerm(...params)),
  listJobsByCompany: (...params) => dispatch(listJobsByCompany(...params)),
  listJobsByTag: (...params) => dispatch(listJobsByTag(...params)),
  listJobs: (...params) => dispatch(listJobs(...params)),
  toggleError: error => toggleError(error)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jobs);
