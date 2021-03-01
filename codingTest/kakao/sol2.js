const solution = (m, v) => {
  var floors = [v[0]];
  var ck = false;
  var j = 0;
  for (var i = 1; i < v.length; i++) {
    ck = false;
    for (var j = floors.length - 1; j >= 0; j--) {
      if (j == 0) {
        if (floors[j] + v[i] <= m) floors[j] += v[i];
        else floors.push(v[i]);
        ck = true;
        break;
      }

      if (floors.length == 1) {
        if (floors[j] + v[i] <= m) floors[j] += v[i];
        else floors.push(v[i]);
        ck = true;
        break;
      }

      if (floors[j] + v[i] <= m) continue;
      else {
        if (isNaN(floors[j + 1])) floors.push(v[i]);
        else floors[j + 1] += v[i];
        ck = true;
        break;
      }
    }
    if (!ck) floors.push(v[i]);
  }

  return floors.length;
};

console.log(solution(10, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));