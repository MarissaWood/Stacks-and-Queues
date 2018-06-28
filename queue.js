// this is an example of implememnting a queue with an array

class Queue {
  constructor () {
    this.head = []
  }

  // enqueue method (go to the back of the line)
  enqueue (item) {
    this.head.push(item)
  }
  // dequeue method (first in line exits the queue)
  dequeue () {
    this.head.shift()
  }

  // peek method (return next in line)
  peek () {
    return this.head[0]
  }
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)

console.log(queue.peek()) // should return 1

queue.dequeue()

console.log(queue.peek()) // should return 2
