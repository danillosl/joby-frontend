const UPDATE = "JOBIFY/SEARCH_BAR/UPDATE";

const initialState = {
  searchTerm: ""
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
      return { ...state, searchTerm: action.payload };

    default:
      return state;
  }
}

export const update = searchTerm => {
  return { type: UPDATE, payload: searchTerm };
};
