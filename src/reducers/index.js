import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import config from "./config";

const rootReducer = combineReducers({
  config,
  form: formReducer
});

export default rootReducer;
