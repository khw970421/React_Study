import { combineReducers } from "redux";
import countReducer from "./countReducer";
import totalCountReducer from "./totalCountReducer";
const rootReducer = combineReducers({
  countReducer,
  totalCountReducer,
});

export default rootReducer;
