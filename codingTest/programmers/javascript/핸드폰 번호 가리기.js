const solution = p => {
  return '*'.repeat(p.length - 4) + p.substring(p.length - 4);
};

// var solution = p => '*'.repeat(p.length - 4) + p.slice(-4);
