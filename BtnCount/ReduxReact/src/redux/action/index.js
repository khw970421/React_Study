export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const TOTAL_INCREASE_COUNT = "TOTAL_INCREASE_COUNT";
export const TOTAL_DECREASE_COUNT = "TOTAL_DECREASE_COUNT";

export const increaseCount = (count, countTarget) => {
  const newCount = count + 1;
  return {
    type: INCREASE_COUNT,
    payload: {
      newCount,
      countTarget,
    },
  };
};

export const decreaseCount = (count, countTarget) => {
  const newCount = count - 1;
  return {
    type: DECREASE_COUNT,
    payload: {
      newCount,
      countTarget,
    },
  };
};

export const totalIncreaseCount = (count) => {
  const newCount = count + 1;
  console.log("action");
  return {
    type: TOTAL_INCREASE_COUNT,
    payload: {
      newCount,
    },
  };
};

export const totalDecreaseCount = (count) => {
  const newCount = count - 1;
  return {
    type: TOTAL_DECREASE_COUNT,
    payload: {
      newCount,
    },
  };
};
