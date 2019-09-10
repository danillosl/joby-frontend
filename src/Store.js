import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import JobsReducer from "./Jobs/JobRedux";
import SearchReducer from "./SearchBar/SearchBarRedux";

const rootReducer = combineReducers({
  jobs: JobsReducer,
  searchBar: SearchReducer
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
