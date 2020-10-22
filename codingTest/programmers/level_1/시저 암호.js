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
