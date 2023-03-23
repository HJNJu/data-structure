// directed graph (방향 그래프)
// unweighted (비가중치)
// adjacency matrix (인접 행렬)
// 이해를 돕기 위해 기존 배열의 인덱스를 정점으로 사용합니다 (0, 1, 2, ... --> 정점)

class GraphWithAdjacencyMatrix {
	constructor() {
		this.matrix = [];
	}

    //버텍스 추가
	addVertex() {
    // 배열의 길이
		const currentLength = this.matrix.length;
		for (let i = 0; i < currentLength; i++) {
			this.matrix[i].push(0);
		}
		this.matrix.push(new Array(currentLength + 1).fill(0));
	}

    // 버텍스 존재 여부 확인
	contains(vertex) {
    return !!this.matrix[vertex];
	}

    // fromVertex와 toVertex 사이 간선 추가
	addEdge(from, to) {
		const currentLength = this.matrix.length;
		if (from === undefined || to === undefined) {
			console.log("2개의 인자가 있어야 합니다.");
			return;
		}
        //TODO: 간선을 추가할 수 없는 상황에서는 추가하지 말아야 합니다.
		if (from + 1 > currentLength || to + 1 > currentLength || from < 0 || to < 0) {
			console.log("범위가 매트릭스 밖에 있습니다.");
			return;
		}
    //TODO: 간선을 추가해야 합니다.
    this.matrix[from][to] = 1;
	}

    // fromVertex와 toVertex 사이의 간선 존재 여부 확인
	hasEdge(from, to) {
		return !!this.matrix[from][to];
	}

    // fromVertex와 toVertex 사이 간선 삭제
	removeEdge(from, to) {
		const currentLength = this.matrix.length - 1;
		if (from === undefined || to === undefined) {
			console.log("2개의 인자가 있어야 합니다.");
			return;
		}
    //TODO: 간선을 지울 수 없는 상황에서는 지우지 말아야 합니다.
		if (from > currentLength || to > currentLength || from < 0 || to < 0) {
      console.log("범위가 매트릭스 밖에 있습니다.");
      return;
		}
    //TODO: 간선을 지워야 합니다.
    this.matrix[from][to] = 0;
	}
}

// 버텍스 추가
const adjMatrix = new GraphWithAdjacencyMatrix();
adjMatrix.addVertex();  // currentLength = 0, matrix = [[0]]
adjMatrix.addVertex();  // currentLength = 1, matrix = [[0, 0], [0, 0]]
adjMatrix.addVertex();  // currentLength = 2, matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]] currentLength = 2
console.log(adjMatrix.matrix);
/*  [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0] 
*/ 

// 버텍스 존재 여부 확인
let zeroExists = adjMatrix.contains(0);
console.log(zeroExists); // true
let oneExists = adjMatrix.contains(1);
console.log(oneExists); // true
let twoExists = adjMatrix.contains(2);
console.log(twoExists); // true
let threeExists = adjMatrix.contains(3);
console.log(threeExists); // false

// (from, to) 간선 추가
adjMatrix.addEdge(0, 1);  // 버텍스0과 버텍스1 사이
adjMatrix.addEdge(0, 2);  // 버텍스0과 버텍스2 사이
adjMatrix.addEdge(1, 2);  // 버텍스1과 버텍스2 사이

// 간선 존재 여부 확인
let zeroToOneEdgeExists = adjMatrix.hasEdge(0, 1);
console.log(zeroToOneEdgeExists); // true
let zeroToTwoEdgeExists = adjMatrix.hasEdge(0, 2);
console.log(zeroToTwoEdgeExists); // true
let oneToZeroEdgeExists = adjMatrix.hasEdge(1, 0);
console.log(oneToZeroEdgeExists); // false

console.log(adjMatrix.matrix);
/*  [0, 1, 1],
    [0, 0, 1],
    [0, 0, 0] 
*/ 

// (from, to) 간선 삭제
adjMatrix.removeEdge(1, 2);
adjMatrix.removeEdge(0, 2);

// 간선 존재 여부 확인
let oneToTwoEdgeExists = adjMatrix.hasEdge(1, 2);
console.log(oneToTwoEdgeExists); // false
zeroToTwoEdgeExists = adjMatrix.hasEdge(0, 2);
console.log(zeroToTwoEdgeExists); // false

console.log(adjMatrix.matrix);
/*  [0, 1, 0],
    [0, 0, 0],
    [0, 0, 0] 
*/ 