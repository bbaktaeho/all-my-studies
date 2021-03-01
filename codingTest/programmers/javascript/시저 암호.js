const solution = (s, n) => {
  let encrypt = '';
  for (let c of s) {
    c = c.charCodeAt();
    let sum = c + n;
    if (c === ' '.charCodeAt()) encrypt += ' ';
    else if (97 <= c && 122 >= c) {
      if (122 < sum) encrypt += String.fromCharCode(sum - 123 + 97);
      else encrypt += String.fromCharCode(sum);
    } else {
      if (90 < sum) encrypt += String.fromCharCode(sum - 91 + 65);
      else encrypt += String.fromCharCode(sum);
    }
  }
  return encrypt;
};
// 테스트 13 〉	통과 (1.66ms, 30.2MB)

var solution = (s, n) => {
  var arr = s.split('');
  return arr
    .map(e => {
      e = e.charCodeAt();
      if (e == ' '.charCodeAt()) return ' ';
      else if (e <= 90 && e >= 65) {
        const char = e + n;
        if (char > 90) return String.fromCharCode(65 + (char - 91));
        else return String.fromCharCode(char);
      } else {
        const char = e + n;
        if (char > 122) return String.fromCharCode(97 + (char - 123));
        else return String.fromCharCode(char);
      }
    })
    .join('');
};
// 테스트 13 〉	통과 (2.91ms, 32.9MB)
