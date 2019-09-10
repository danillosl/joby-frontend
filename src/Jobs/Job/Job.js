import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Job.scss";
export default class Job extends Component {
  handleClick = (evt, id) => {
    if (evt.target.classList.contains("job") || evt.target.classList.contains("job__logo") || evt.target.classList.contains("job__date") || evt.target.classList.contains("job__letter")) {
      this.props.history.push(`/job/${id}`);
    }
  };

  getDateText = date => {
    const elapseMiliseconds = Date.now() - new Date(date).getTime();

    const monthMiliseconds = 2419200000,
      weekMiliseconds = 604800000,
      dayMiliseconds = 86400000,
      hourMiliseconds = 3600000;

    if (elapseMiliseconds >= monthMiliseconds) {
      const calculated = Math.round(elapseMiliseconds / monthMiliseconds);
      return `${calculated} ${calculated > 1 ? "months" : "month"} ago`;
    } else if (elapseMiliseconds >= weekMiliseconds) {
      const calculated = Math.round(elapseMiliseconds / weekMiliseconds);
      return `${calculated} ${calculated > 1 ? "weeks" : "week"} ago`;
    } else if (elapseMiliseconds >= dayMiliseconds) {
      const calculated = Math.round(elapseMiliseconds / dayMiliseconds);
      return `${calculated} ${calculated > 1 ? "days" : "day"} ago`;
    } else if (elapseMiliseconds >= hourMiliseconds) {
      const calculated = Math.round(elapseMiliseconds / hourMiliseconds);
      return `${calculated} ${calculated > 1 ? "hours" : "hour"} ago`;
    } else {
      return "now";
    }
  };

  render() {
    const { job } = this.props;
    return (
      <div onClick={evt => this.handleClick(evt, job._id)} className="job">
        {job.logo ? (
          <div className="job__item">
            <img src={job.logo} alt="" className="job__logo" />
          </div>
        ) : (
          <div className="job__item">
            <div className="job__letter-container">
              <p className="job__letter">{job.company[0].toUpperCase()}</p>
            </div>
          </div>
        )}
        <div className="job__item">
          <Link to={`/job/${job._id}`}>
            <h3 className="job__title">{job.title}</h3>
          </Link>
          <Link to={`/company/${job.company}`}>
            <h4 className="job__company">{job.company}</h4>
          </Link>
        </div>
        <div className="job__item job__item--tags">
          {job.tags.map(tag => (
            <Link key={tag} className="job__tag" to={`/tag/${tag}`}>
              <p>{tag}</p>
            </Link>
          ))}
        </div>
        <div className="job__item">
          <p className="job__date">{this.getDateText(job.date)}</p>
        </div>
      </div>
    );
  }
}
