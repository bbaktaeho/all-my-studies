var solution = citations => {
  citations.sort((a, b) => b - a);
  let h = 0;
  while (h + 1 <= citations[h]) h++;
  return h;
};
