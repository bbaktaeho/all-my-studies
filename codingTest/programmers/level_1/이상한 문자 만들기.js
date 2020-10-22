var solution = s => {
  var arr = s.split(' ');

  return arr
    .map(e => {
      if (e == ' ') return ' ';
      return e
        .split('')
        .map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
        .join('');
    })
    .join(' ');
};

console.log(solution('try hello world'));
