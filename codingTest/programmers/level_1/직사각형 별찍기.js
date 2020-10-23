process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  let [n, m] = data.split(' ');
  while (m-- > 0) console.log('*'.repeat(n));
});
