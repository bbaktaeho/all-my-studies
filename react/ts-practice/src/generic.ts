function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);
wrapped.param;

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["fdaf", "4352"],
};

type Foods<T, V> = {
  list: T[];
  value: V;
};

const foods: Foods<string, number> = {
  list: ["fsdfda", "fadfaf"],
  value: 2,
};

// ? 큐 만들어보기
class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0) console.log(queue.dequeue());
