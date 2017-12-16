import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import config from "./config";
import chatbot from "./chatbot";

const rootReducer = combineReducers({
  config,
  chatbot,
  form: formReducer
});

export default rootReducer;
