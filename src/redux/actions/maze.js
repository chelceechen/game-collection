export const direction1 = (newY, newX, y, x) => {
  return {
    type: "MOVEMENT1",
    x,
    y,
    newX,
    newY,
  };
};

export const checkDiff = (difficulty, index) => {
  return {
    type: "CHECKDIFF",
    difficulty,
    index,
  };
};
