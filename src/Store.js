import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import Component1Reducer from "./Component1/Component1Redux";
import Component2Reducer from "./Component2/Component2Redux";
import Component3Reducer from "./Component3/Component3Redux";

const rootReducer = combineReducers({
  component1: Component1Reducer,
  component2: Component2Reducer,
  component3: Component3Reducer
});

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
