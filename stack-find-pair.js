const isValid = (str) => {
      if (str.length === 0) return false;
  
    // 각각의 여는 괄호에 알맞는 닫는 괄호를 매칭시키기 위한 괄호맵
    const brakets = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
  
    const arr = str.split('');                                      //  '[]{}()'  -> ['[', ']', '{', '}', '(', ')']
    const stack = [];
  
    for (let i = 0; i < arr.length; ++i) {
      // 1. 여는 괄호 -> stack에 push해야 하는 케이스
      if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {     // arr[0] === '[' -> arr[1] === ']'
        stack.push(arr[i]);                                         // stack.push(arr[0])  -> stack = ['[']
      } else {
        // 2. 닫는 괄호 -> stack에서 pop해야 하는 케이스
        // 현재 stack의 가장 위에 위치한 괄호를 확인
        const lastElementOfStack = stack[stack.length - 1];         // lastElementOfStack = stack[stack.length - 1] = stack[0]
        // 지금 처리해야하는 닫힌 괄호인 arr[i]의 짝과 맞는지를 확인 후 맞지 않다면 false를 리턴하고 로직 전체를 종료
        if (brakets[lastElementOfStack] !== arr[i]) return false;   // brackets[stack[0]]= brackets['['] = ']' -> 짝이 맞음
        // 짝이 맞다면 현재 stack의 가장 위에 위치한 괄호를 pop시켜서 stack에서 제거해줌
          stack.pop();                                              // stack.pop() -> stack=[];
      }
    }
    // arr 배열전체를 돌면서 해당 로직을 이행한 후 stack에 어떠한 열린괄호라도 남아있다면 쌍이 맞지 않는 괄호들이 인풋으로 들어왔기 때문에 false를 반환, 그렇지 않고 stack이 비어져 있다면 모든 괄호쌍이 문제없이 유효한 괄호쌍이므로 true를 반환
    return stack.length ? false : true;                             // (falsy 값이면 true, truthy 값이면 false) stack.length = 0(falsy) -> true  
  }
  