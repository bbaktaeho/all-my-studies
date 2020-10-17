const { L, take } = require('../lib/fx');

const it = L.flatten([1, 2, 3, [4, 5, 6], [7], 8, 9]);
const it2 = take(3, L.flatten([1, 2, 3, [4, 5, 6], [7], 8, 9]));

console.log(...it);
console.log(...it2);
