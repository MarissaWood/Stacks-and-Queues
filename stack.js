// this is an example of implementing a stack using an array

class Stack {
  constructor () {
    this.head = []
    this.length = 0
  }

  // push method
  push (item) {
    this.head.push(item)
    this.length++
  }

  // pop method
  pop () {
    this.head.pop()
    this.length--
  }

  // peak method
  peak () {
    return this.head[this.length-1]
  }
}

let stack = new Stack

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.peak()) // should return 4

stack.push(5)

console.log(stack.peak()) // should return 5
