const hash = require('crypto').createHash('sha256');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
var result;
rl.on('line', input => {
  result = hash.update(input).digest('hex');
}).on('close', () => console.log(result));
