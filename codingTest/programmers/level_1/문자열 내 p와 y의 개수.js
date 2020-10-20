function solution(s) {
  s = s.toLowerCase();
  var p = 0;
  var y = 0;
  for (var i of s) {
    if (i == 'p') p++;
    if (i == 'y') y++;
  }
  return y == p ? true : false;
}
