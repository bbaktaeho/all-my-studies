var solution = s =>
  (s.length == 6 || s.length == 4) &&
  (!isNaN(Number(s)) && s.search(' ') < 0 && s.search('e') < 0 ? true : false);

console.log(solution(' 123 '));
isNaN();
console.log(parseInt('1e22'));
