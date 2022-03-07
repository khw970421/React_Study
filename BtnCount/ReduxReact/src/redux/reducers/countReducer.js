import { INCREASE_COUNT, DECREASE_COUNT } from "../action";
const initialState = {
  first: 0,
  second: 0,
  third: 0,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      const key1 = action.payload.key;
      const count1 = action.payload.count;
      const obj1 = {};
      obj1[key1] = count1;
      console.log(key1, count1);
      return {
        ...state,
        ...obj1,
      };
    case DECREASE_COUNT:
      const key2 = action.payload.key;
      const count2 = action.payload.count;
      const obj2 = {};
      obj2[key2] = count2;
      return {
        ...state,
        ...obj2,
      };
    default:
      return state;
  }
};
export default countReducer;
