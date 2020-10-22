var solution = s =>
  s
    .split('')
    .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
    .join('');

console.log(solution('Zbcdefg'));
