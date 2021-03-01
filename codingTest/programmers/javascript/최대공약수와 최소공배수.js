const solution = (a, b) => {
  const m = Math.min(a, b);
  let gcm = 0;
  for (let i = 1; i <= m; i++) if (a % i == 0 && b % i == 0) gcm = i;
  return [gcm, (a * b) / gcm];
};
