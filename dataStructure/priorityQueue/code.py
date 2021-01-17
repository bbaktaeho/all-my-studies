q = []

def enqueue(value):
    q.append(value)

def dequeue():
    v = q[0]
    del q[0]
    return v

import queue
queue.Queue()
queue.LifoQueue() # stack
queue.PriorityQueue()