export const direction = (newX, newY, x, y) => {
  return {
    type: "MOVEMENT",
    x,
    y,
    newX,
    newY,
  };
};
