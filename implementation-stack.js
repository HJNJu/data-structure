class Stack {
    constructor() {
      this.storage = {};
      this.top = -1; // Initalizing the pointer variable (top of the stack)
    }
  
    size() {
      return this.top + 1;
    }
  
    // Adding data to the stack
    push(element) {
      this.top += 1;
      this.storage[this.top] = element;
    }
      
    // Last In First Out
    pop() {
      if (this.size() <= 0) {
        return;
      }
  
      const result = this.storage[this.top];
      delete this.storage[this.top];
      this.top -= 1;
      
      return result;
    }
}


// e.g.
const stack = new Stack();

stack.size(); // 0

for(let i = 1; i < 10; i++) {
  	stack.push(i);
}
console.log(stack);
/* Stack {
    storage: {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9}, 
    top: 8
   }
*/

stack.pop();  // 9
stack.pop();  // 8
stack.size(); // 7
stack.push(8);
stack.size(); // 8