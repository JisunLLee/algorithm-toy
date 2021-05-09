
data = []
class Stack {
    index = 0
    push(value){
        data[this.index] = value
        console.log('Push : ', value)
        console.log('Stack : ', data)
        this.index++
    }

    pop(){
        console.log('POP : ', data[this.index-1])
        data[this.index-1] = null
        console.log('Stack : ', data)
        this.index --
    }

    top(){
        console.log('TOP : ',data[this.index-1])
    }
}


function testStack() {
    const stack = new Stack();
    stack.top()
    stack.push("A")
    stack.top()
    stack.push("B")
    stack.push("C")
    stack.top()
    stack.pop()
    stack.push("D")
    stack.pop()
    stack.pop()
}

class Queue {
    index = 0
    length = 0
    enque(value){
        data[this.index] = value;
        console.log('ENQUE : ', value)
        console.log('QUEUE : ', data)
        this.index++
        this.length++
    }
    deque(){
        console.log('DEQUE : ', data[0])
        for(let i = 0; i < this.length; i ++){
            data[i] = data[i+1]
        }
        this.length --
        this.index --
        console.log('QUEUE : ', data)
    }
    first(){
        console.log("FIRST : ", data[0])
    }
}

function testQueue() {
    const queue = new Queue();
    queue.enque("A")
    queue.enque("B")
    queue.enque("C")
    queue.first()
    queue.deque()
    queue.enque("D")
    queue.deque()
    queue.deque()
}

testQueue()