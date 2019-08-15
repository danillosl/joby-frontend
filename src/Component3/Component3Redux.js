// Component3

// structure based on react duck, see more on https://github.com/erikras/ducks-modular-redux
// Action types
const LOAD = "react-boilerplate/Component3/LOAD";
const CREATE = "react-boilerplate/Component3/CREATE";
const UPDATE = "react-boilerplate/Component3/UPDATE";
const REMOVE = "react-boilerplate/Component3/REMOVE";

// initial state

const initialState = {
  count: 7,
  componentList: [
    { name: "component", type: "component3" },
    { name: "component", type: "component3" },
    { name: "component", type: "component3" },
    { name: "component", type: "component3" },
    { name: "component", type: "component3" },
    { name: "component", type: "component3" },
    { name: "component", type: "component3" }
  ]
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      // do something with the state;
      return state;

    case CREATE:
      // do something with the state;
      return state;

    case UPDATE:
      // do something with the state;
      return state;
    case REMOVE:
      // do something with the state;
      return state;

    default:
      return state;
  }
}

// Action Creators
export const actions = {
  loadComponents: () => {
    return { type: LOAD };
  },

  createComponent: Component3 => {
    return { type: CREATE, payload: Component3 };
  },

  updateComponent: Component3 => {
    return { type: UPDATE, payload: Component3 };
  },

  removeComponent: Component3 => {
    return { type: REMOVE, payload: Component3 };
  }
};
