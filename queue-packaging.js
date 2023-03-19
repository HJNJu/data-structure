function paveBox(boxes) {
    // answer = 한번에 나간 인원 수
    let answer = [];
      
    // boxes 배열이 0보다 클 때까지 반복 = boxes 포장이 다 끝나고 모두 나갈 때까지 반복
    while(boxes.length > 0){
      // finishIndex = 제일 앞사람이 포장해야 되는 것보다 박스 수가 더 많은 제일 가까운 뒷사람 = 앞사람 끝나면 finishIndex 전까지 한번에 나갈 수 있음 
      let finishIndex = boxes.findIndex(fn => boxes[0] < fn);
  
      // 만약 뒷사람들 전부 제일 앞사람보다 박스 수가 적다면, 앞사람 포함 그 사람들 인원 정답에 넣기 (앞사람이 끝난 즉시 모든 인원 나갈 수 있으므로)
      // 다 나갔으면 빈 박스로 만들기
      if(finishIndex === -1){                                    
        answer.push(boxes.length);
        boxes.splice(0, boxes.length);
      } else {
        // 만약 앞사람보다 박스 수가 많은 사람이 있다면, 해당 인덱스를 answer에 넣고 (앞사람 끝난 즉시 한꺼번에 나갈 수 있는 인원)
        // 나간 인원 만큼 박스 비워주기
        answer.push(finishIndex);                                       
        boxes.splice(0, finishIndex);                                   
      }
    }
    // 한번에 나간 인원 중 가장 큰 인원 리턴
    return Math.max(...answer);
  }
  
  // 1st loop
  // [5, 1, 4, 6] -> finishIndex = 1
  // answer = [1]
  // boxes = [1, 4, 6]
  // 2nd loop
  // [1, 4, 6] -> finishIndex = -1
  // answer = [1, 3]
  // boxes = []
  // return Math.max(...answer) -> 3;
  
  
  // 1st loop
  // [2, 2, 3, 4] -> finishIndex = 2
  // answer = [2]
  // boxes = [3, 4]
  // 2nd loop
  // [3, 4] -> finishIndex = 1
  // answer = [2, 1]
  // boxes = [4]
  // 3rd loop
  // [4] -> finishIndex = -1
  // answer = [2, 1, 1]
  // boxes = 0
  // return Math.max(...answer) -> 2;