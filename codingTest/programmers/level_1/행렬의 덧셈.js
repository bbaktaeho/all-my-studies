var solution = (arr1, arr2) => {
  var matrix = [];
  for (let i in arr1) {
    let row = [];
    for (let j in arr1[i]) row.push(arr1[i][j] + arr2[i][j]);
    matrix.push(row);
  }
  return matrix;
};
