import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

const win = window;

// const middlewares = [ReduxPromise];

const storeEnhancers = compose(
  applyMiddleware(thunkMiddleware),
  win && win.devToolsExtension ? win.devToolsExtension() : f => f
);

export default function configureStore() {
  return createStore(rootReducer, {}, storeEnhancers);
}
