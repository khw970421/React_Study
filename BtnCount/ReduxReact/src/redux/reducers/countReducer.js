import { INCREASE_COUNT, DECREASE_COUNT } from "../action";
const initialState = {
  first: 0,
  second: 0,
  third: 0,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      console.log(action.payload.newCount, `~~~`);
      const target1 = action.payload.countTarget;
      const newCount1 = action.payload.newCount;
      const obj = {};
      obj[target1] = newCount1;
      return {
        ...state,
        ...obj,
      };
    case DECREASE_COUNT:
      const target2 = action.payload.countTarget;
      const newCount2 = action.payload.newCount;
      const obj2 = {};
      obj2[target2] = newCount2;
      return {
        ...state,
        ...obj2,
      };
    default:
      return state;
  }
};
export default countReducer;
