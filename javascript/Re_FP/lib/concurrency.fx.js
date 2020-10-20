const noop = () => {};
const catchNoop = arr => (
  arr.forEach(a => (a instanceof Promise ? a.catch(noop) : a)), arr
);
const C = {};

C.reduce = curry((f, acc, iter) =>
  iter ? reduce(f, acc, catchNoop([...iter])) : reduce(f, catchNoop(acc)),
);
C.take = curry((limit, iter) => take(limit, catchNoop([...iter])));
C.takeAll = C.take(Infinity);
C.map = curry(pipe(L.map, C.takeAll));
C.filter = curry(pipe(L.filter, C.takeAll));
