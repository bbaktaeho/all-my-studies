const solution = (a, b) => {
  return new Date(`2016-${a}-${b}`).toDateString().split(' ')[0].toUpperCase();
};
