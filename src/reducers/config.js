import { PAGE_SWITCH } from "../actions/configActions";

const initialState = {
  currentPage: "home"
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case PAGE_SWITCH:
      return {
        ...state,
        currentPage: action.pageName
      };

    default:
      return state;
  }
}
