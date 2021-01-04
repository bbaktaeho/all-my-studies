function solution(n, delivery) {
  const list = new Array(n + 1).fill('?');
  delivery.some((e, i, origin) => {
    if (e[2]) {
      list[e[0]] = 'O';
      list[e[1]] = 'O';
    } else {
      if (list[e[0]] == 'O') list[e[1]] = 'X';
      else if (list[e[1]] == 'O') list[e[0]] = 'X';
      else {
        list[e[0]] = list[e[0]] != 'X' ? '?' : 'X';
        list[e[1]] = list[e[1]] != 'X' ? '?' : 'X';
      }
    }
    for (let j = 0; j < i + 1; j++) {
      if (origin[j][2]) {
        list[origin[j][0]] = 'O';
        list[origin[j][1]] = 'O';
      } else {
        if (list[origin[j][0]] == 'O') list[origin[j][1]] = 'X';
        else if (list[origin[j][1]] == 'O') list[origin[j][0]] = 'X';
        else {
          list[origin[j][0]] = list[origin[j][0]] != 'X' ? '?' : 'X';
          list[origin[j][1]] = list[origin[j][1]] != 'X' ? '?' : 'X';
        }
      }
    }
  });
  return list.slice(1).join('');
}
