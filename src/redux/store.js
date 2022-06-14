import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const initialState = {};
const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhance(applyMiddleware(thunk))
);
