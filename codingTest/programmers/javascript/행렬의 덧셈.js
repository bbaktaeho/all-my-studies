var solution = (arr1, arr2) => {
  var result = [];
  for (var i in arr1) {
    var row = [];
    for (var j in arr1[i]) row.push(arr1[i][j] + arr2[i][j]);
    result.push(row);
  }
  return result;
};
