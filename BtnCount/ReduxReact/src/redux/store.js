import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../redux/reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
