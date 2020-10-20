function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] >= b[n] ? (a[n] == b[n] ? (a > b ? 1 : -1) : 1) : -1,
  );
}
''.loca;
strings.sort((s1, s2) =>
  s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]),
);
