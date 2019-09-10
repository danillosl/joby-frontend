import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../Loader/Loader";
import ReactMarkdown from "react-markdown";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import { requestJob, toggleError } from "../JobRedux";
import "./JobPage.scss";

class JobPage extends Component {
  componentDidMount() {
    this.props.requestJob(this.props.match.params.id);
  }

  componentDidUpdate = prevProps => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.requestJob(this.props.match.params.id);
    }
  };

  renderJob = job => {
    return (
      <div className="job-page__details">
        {job.logo ? (
          <Link to={`/company/${job.company}`}>
            <div className="job-page__logo-border">
              <img src={job.logo} alt="" className="job-page__logo" />
            </div>
          </Link>
        ) : null}

        <h1 className="job-page__title">{job.title}</h1>

        <h2 className="job-page__company">
          <Link to={`/company/${job.company}`}>{job.company}</Link>
        </h2>

        <div className="job-page__tags">
          {job.tags.map(tag => (
            <Link key={tag} className="job-page__tag" to={`/tag/${tag}`}>
              <p>{tag}</p>
            </Link>
          ))}
        </div>

        <div className="job-page__markdown">
          <ReactMarkdown source={job.description} />
        </div>

        <a href={job.link} target="_blank" rel="noopener noreferrer" className="job-page__apply">
          Apply for this position
        </a>
      </div>
    );
  };

  render() {
    const { job, loading, error, toggleError } = this.props;

    if (error === "404") {
      toggleError();
      return <Redirect push to="/404" />;
    }

    return (
      <div className="job-page">
        {!loading && job.company ? (
          this.renderJob(job)
        ) : (
          <div className="loader">
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  job: state.jobs.selectedJob,
  loading: state.jobs.loading,
  error: state.jobs.error
});
const mapDispatchToProps = dispatch => ({
  requestJob: (...params) => dispatch(requestJob(...params)),
  toggleError: error => dispatch(toggleError(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobPage);
