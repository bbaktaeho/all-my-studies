function bubbleSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let flag = false;
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return list;
}

const list = new Array(10).fill(1);
list.some((e, i) => {
  list[i] = e * Math.random() * 19 + 1;
});
console.log(bubbleSort(list));
