class Queue {
    constructor() {
      this.storage = {};
      this.front = 0;
      this.rear = 0;
    }
  
    size() {
      return this.rear - this.front;
    }
      
    enqueue(element) {                        // enqueue(1)     -> enqueue(2)
      this.storage[this.rear] = element;      // storage[0] = 1 -> storage[1] = 2
      this.rear += 1;                         // rear = 1       -> rear = 2 
    }
      
    dequeue() {
      if (this.size() <= 0) {
        return;
      }
  
      const result = this.storage[this.front];      // result = this.storage[0] = 1
      delete this.storage[this.front];              // delete this.storage[0]
      this.front += 1;                              // front = 1
  
      return result;                                // result = 1
    }
  }