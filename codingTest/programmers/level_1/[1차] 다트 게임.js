var solution = dart => {
  function f(char, arr) {
    switch (char) {
      case 'S':
        break;
      case 'D':
        arr.push(Math.pow(arr.pop(), 2));
        break;
      case 'T':
        arr.push(Math.pow(arr.pop(), 3));
        break;
      case '*':
        if (arr.length == 1) arr[0] = arr[0] * 2;
        else {
          arr[arr.length - 2] = arr[arr.length - 2] * 2;
          arr[arr.length - 1] = arr[arr.length - 1] * 2;
        }
        break;
      case '#':
        arr.push(-arr.pop());
        break;
    }
  }

  const arr = dart.split('');
  let num;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    num = Number(arr[i]);
    if (!isNaN(num)) {
      if (i < arr.length && !isNaN(Number(arr[i + 1]))) {
        result.push(+('' + num + arr[++i]));
      } else result.push(num);
    } else f(arr[i], result);
  }
  return result.reduce((e, acc) => e + acc);
};
