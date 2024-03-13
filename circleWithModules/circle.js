const { PI } = Math;

const circleArea = (r) => {
  return PI * Math.pow(r, 2);
};

const circleCircumference = (r) => {
  return 2 * PI * r;
};

module.exports = { circleArea, circleCircumference };
