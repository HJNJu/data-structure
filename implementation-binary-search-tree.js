class BinarySearchTree {

    constructor(value) {
      // constructor로 만든 객체는 이진 탐색 트리의 Node
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    // 이진 탐색 트리의 삽입하는 메서드
    insert(value) {
        // 입력값을 기준으로, 현재 노드의 값보다 크거나 작은지 확인
        // 입력값이 현재 노드 값보다 작다면, Node의 왼쪽이 비어 있는지 확인 후 값 추가
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BinarySearchTree(value);
            } else {
                // Node 왼쪽이 비어 있지 않다면 해당 노드로 이동하여 처음부터 다시 큰지 작은지 물어보아야 함 -> 재귀함수
                this.left.insert(value);
            }
        // 입력값이 현재 노드 값보다 크다면, Node의 오른쪽이 비어 있는지 확인 후 값 추가
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = new BinarySearchTree(value);
            } else {
                // Node 오른쪽이 비어 있지 않다면 해당 노드로 이동하여 처음부터 다시 큰지 작은지 물어보아야 함 -> 재귀함수
                this.right.insert(value)
            }
        // 입력값이 현재 노드 값보다 작지도 크지도 않다면, 입력값이 트리에 들어 있는 경우이므로, 아무것도 하지 않음
        } else {

        }
    }
  
    // 이진 탐색 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드
    contains(value) {
        // 값이 포함되어 있다면 true를 반환
        if (value === this.value) {
            return true;
        }

        // 입력값이 현재 노드 값보다 작은지 판별
        if (value < this.value) {
            // 현재 노드의 왼쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true를 반환
            // 일치하지 않다면 왼쪽 노드로 이동하여 다시 탐색
            return !!(this.left && this.left.contains(value));
        } else if (value > this.value) {
            // 입력값이 현재 노드 값보다 큰지 판별
            // 현재 노드의 오른쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true를 반환
            // 일치하지 않다면 오른쪽 노드로 이동하여 다시 탐색
            return !!(this.left && this.right.contains(value));
        } else {
            // 없다면 false 반환
            return false;
        }
    }
  
    /*
    트리의 순회에 대해 구현을 합니다.
    지금 만드려고 하는 이 순회 메서드는 단지 순회만 하는 것이 아닌, 함수를 매개변수로 받아 콜백 함수에 값을 적용시킨 것을 순회해야 합니다.
    전위 순회를 통해 어떻게 탐색하는지 이해를 한다면 중위와 후위 순회는 쉽게 다가올 것입니다.
    */
  
    // 이진 탐색 트리를 전위 순회하는 메서드
    preorder(callback) {
        callback(this.value);

        if (this.left) {
            this.left.preorder(callback);
        };

        if (this.right) {
            this.right.preorder(callback);
        };
    }
  
    // 이진 탐색 트리를 중위 순회하는 메서드
    inorder(callback) {
        if (this.left){
            this.left.inorder(callback);
        }
        callback(this.value);
        if (this.right) {
            this.right.inorder(callback);
        }
    }
  
    // 이진 탐색 트리를 후위 순회하는 메서드
    postorder(callback) {
        if (this.left){
            this.left.postorder(callback);
        }
      
        if (this.right) {
            this.right.postorder(callback);
        }
      
        callback(this.value);
    }
  
}

// e.g.
const rootNode = new BinarySearchTree(10);
rootNode.insert(7);
rootNode.insert(8);
rootNode.insert(12);
rootNode.insert(11);
console.log(rootNode);
/* BinarySearchTree {
        value: 10, 
        left: BinarySearchTree {
                value: 7, 
                left: null, 
                right: BinarySearchTree {
                    value: 8, 
                    left: null, 
                    right: null
                }
            }, 
        right: BinarySearchTree {
                value: 12, 
                left: BinarySearchTree {
                        value: 11, 
                        left: null, 
                        right: null
                    }, 
                right: null
            }
    }
*/

rootNode.left.right.value; // 8
rootNode.right.left.value; //11


/* 
           10
         /    \
        7      12
       /         \
      8           11

*/


let arr = [];
rootNode.preorder((value) => arr.push(value * 2));
console.log(arr); // [20, 14, 16, 24, 22] <- [10, 7, 8, 12, 11]