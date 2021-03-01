var solution = n =>
  +String(n)
    .split('')
    .sort((a, b) => parseInt(b) - parseInt(a))
    .join('');
