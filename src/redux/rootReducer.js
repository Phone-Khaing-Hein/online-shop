import { productReducers } from "./reducers/productReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  products: productReducers,
});
