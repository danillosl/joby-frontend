import axios from "axios";

export default class JobService {
  constructor() {
    this.jobRepository = axios.create({
      baseURL: "https://api.joby.tech/jobs"
    });
  }

  getJob = id => {
    return this.jobRepository.get(`/${id}`);
  };

  listJobsByTag = (tags, page, pageSize) => {
    return this.listJobs({ tags }, page, pageSize, undefined);
  };

  listJobsByCompany = (company, page, pageSize) => {
    return this.listJobs({ company }, page, pageSize, undefined);
  };

  listJobsBysearchTerm = (searchTerm, page, pageSize) => {
    return this.listJobs({ $text: { $search: searchTerm } }, page, pageSize, undefined);
  };

  listJobs = (query = {}, page = 1, pageSize = 10, fields = "logo,title,company,tags,date") => {
    return this.jobRepository.get("", {
      params: {
        pageSize,
        page,
        fields,
        query: JSON.stringify(query)
      }
    });
  };
}
