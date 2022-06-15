//using thunk over here in store
import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "../reducer";
import thunk from "redux-thunk";
let composeEnhancers = null;
if (process.env.NODE_ENV === "development") {
  composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
} else {
  composeEnhancers = compose;
}
const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(reducer, enhancer);
