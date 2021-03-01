function solution(board) {
  var rowSize = board.length;
  var colSize = board[0].length;

  if (rowSize == 1 && colSize == 1) return board[0][0];
  else {
    let max = 0;
    for (let i = 1; i < rowSize; i++) {
      for (let j = 1; j < colSize; j++) {
        // 상, 좌, 대각이 존재하는 0이 아닌 셀에서 최소값 구하기
        if (board[i][j]) {
          let min = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);
          // 최소값 + 1 를 현재 셀에 저장
          board[i][j] = min + 1;
          // 최대값 구하기
          max = Math.max(max, board[i][j]);
        }
      }
    }
    return max ** 2;
  }
}
