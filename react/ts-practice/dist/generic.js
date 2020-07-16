"use strict";
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 2 });
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(10);
wrapped.param;
const items = {
    list: ["fdaf", "4352"],
};
const foods = {
    list: ["fsdfda", "fadfaf"],
    value: 2,
};
// ? 큐 만들어보기
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (queue.length > 0)
    console.log(queue.dequeue());
