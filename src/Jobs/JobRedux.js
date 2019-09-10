import JobService from "./JobService";

const RESET = "JOBIFY/JOB/RESET";
const LOAD_JOBS = "JOBIFY/JOB/LOAD_JOBS";
const LOAD_JOB = "JOBIFY/JOB/LOAD_JOB";
const TOGGLE_LOADING = "JOBIFY/JOB/TOGGLE_LOADING";
const TOGGLE_SUBLOADING = "JOBIFY/JOB/TOGGLE_SUBLOADING";
const TOGGLE_ERROR = "JOBIFY/JOB/TOGGLE_ERROR";

const jobService = new JobService();

const initialState = {
  selectedJob: {},
  moreData: true,
  pageSize: 10,
  total: 0,
  page: 1,
  data: [],
  loading: false,
  subLoading: false,
  error: ""
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESET:
      return initialState;
    case LOAD_JOBS:
      return { ...state, ...action.payload, data: [...state.data, ...action.payload.data], moreData: state.data.length + action.payload.data.length < action.payload.total ? true : false };

    case LOAD_JOB:
      return { ...state, selectedJob: action.payload };

    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading };

    case TOGGLE_SUBLOADING:
      return { ...state, subLoading: !state.subLoading };

    case TOGGLE_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

const templateFunction = func => {
  return (...params) => async dispatch => {
    const [, page] = params;
    if (!page) {
      dispatch(reset());
      dispatch(toggleLoading());
    } else {
      dispatch(toggleSubloading());
    }

    func(...params)
      .then(res => {
        dispatch(loadJobs(res.data));
        if (!page) {
          dispatch(toggleLoading());
        } else {
          dispatch(toggleSubloading());
        }
      })
      .catch(error => {
        console.log(error);
        if (!page) {
          dispatch(toggleLoading());
        } else {
          dispatch(toggleSubloading());
        }
        dispatch(toggleError("404"));
      });
  };
};

export const listJobs = templateFunction(jobService.listJobs);

export const listJobsByTag = templateFunction(jobService.listJobsByTag);

export const listJobsByCompany = templateFunction(jobService.listJobsByCompany);

export const listJobsBysearchTerm = templateFunction(jobService.listJobsBysearchTerm);

export const requestJob = id => async dispatch => {
  dispatch(toggleLoading());

  jobService
    .getJob(id)
    .then(res => {
      dispatch(loadJob(res.data));
      dispatch(toggleLoading());
    })
    .catch(error => {
      dispatch(toggleError("404"));
      dispatch(toggleLoading());
    });
};

export const loadJobs = jobs => {
  return { type: LOAD_JOBS, payload: jobs };
};

export const loadJob = job => {
  return { type: LOAD_JOB, payload: job };
};

export const toggleError = (error = "") => {
  return { type: TOGGLE_ERROR, payload: error };
};

const toggleLoading = () => {
  return { type: TOGGLE_LOADING };
};

const toggleSubloading = () => {
  return { type: TOGGLE_SUBLOADING };
};

const reset = () => {
  return { type: RESET };
};
