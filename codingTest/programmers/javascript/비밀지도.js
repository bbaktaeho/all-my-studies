const solution = (n, arr1, arr2) => {
  const result = [];
  const f = e => {
    const binary = e.toString(2);
    return binary.length != n ? '0'.repeat(n - binary.length) + binary : binary;
  };
  arr1 = arr1.map(f);
  arr2 = arr2.map(f);
  for (const i in arr1) {
    let s = String(+arr1[i] + +arr2[i]);
    if (s.length != n) s = '0'.repeat(n - s.length) + s;
    let row = '';
    for (const c of s) row += c == '0' ? ' ' : '#';
    result.push(row);
  }
  return result;
};
// 테스트 1 〉	통과 (0.38ms, 30.4MB)
// 테스트 2 〉	통과 (0.43ms, 29.9MB)
// 테스트 3 〉	통과 (0.15ms, 30MB)
// 테스트 4 〉	통과 (0.36ms, 30.3MB)
// 테스트 5 〉	통과 (0.18ms, 30.1MB)
// 테스트 6 〉	통과 (0.23ms, 30MB)
// 테스트 7 〉	통과 (0.18ms, 30.1MB)
// 테스트 8 〉	통과 (0.18ms, 30.1MB)

var solution = (n, arr1, arr2) => {
  var f = e => {
    const arr = e.toString(2).split('');
    arr.length < n ? arr.unshift('0'.repeat(n - arr.length)) : '';
    return arr.join('').split('').map(Number);
  };
  arr1 = arr1.map(f);
  arr2 = arr2.map(f);

  const result = [];
  for (const i in arr1) {
    const row = [];
    for (const j in arr1[i]) row.push(arr1[i][j] + arr2[i][j]);
    result.push(row.map(e => (e == 0 ? ' ' : '#')));
  }
  return result.map(e => e.join(''));
};
// 테스트 1 〉	통과 (0.27ms, 30.1MB)
// 테스트 2 〉	통과 (0.41ms, 30MB)
// 테스트 3 〉	통과 (0.19ms, 29.9MB)
// 테스트 4 〉	통과 (0.19ms, 30.1MB)
// 테스트 5 〉	통과 (0.24ms, 30.1MB)
// 테스트 6 〉	통과 (0.32ms, 29.9MB)
// 테스트 7 〉	통과 (0.23ms, 30MB)
// 테스트 8 〉	통과 (0.21ms, 30MB)

const solution = (n, arr1, arr2) => {
  const result = [];
  for (const i in arr1) {
    let row = (arr1[i] | arr2[i])
      .toString(2)
      .replace(/1/g, '#')
      .replace(/0/g, ' ');
    if (row.length != n) row = ' '.repeat(n - row.length) + row;
    result.push(row);
  }
  return result;
};
// 테스트 1 〉	통과 (0.13ms, 30.1MB)
// 테스트 2 〉	통과 (0.16ms, 30.1MB)
// 테스트 3 〉	통과 (0.09ms, 30.3MB)
// 테스트 4 〉	통과 (0.12ms, 30MB)
// 테스트 5 〉	통과 (0.11ms, 30.1MB)
// 테스트 6 〉	통과 (0.14ms, 30.1MB)
// 테스트 7 〉	통과 (0.11ms, 30.1MB)
// 테스트 8 〉	통과 (0.08ms, 30.1MB)
