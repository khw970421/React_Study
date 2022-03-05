import { TOTAL_INCREASE_COUNT, TOTAL_DECREASE_COUNT } from "../action";
const initialState = 0;
const totalCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_INCREASE_COUNT:
      return action.payload.newCount;
    case TOTAL_DECREASE_COUNT:
      return action.payload.newCount;
    default:
      return state;
  }
};
export default totalCountReducer;
