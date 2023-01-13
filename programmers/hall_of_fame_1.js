function solution(k, score) {
  const answer = [];
  const scoreBoard = [];

  // 조금 더 깔끔하게 풀 수 있을것 같은데..
  score.forEach((s) => {
    const scoreBoardLength = scoreBoard.length;

    if (scoreBoardLength < k) {
      scoreBoard.push(s);
      scoreBoard.sort((a, b) => b - a);
      answer.push(scoreBoard[scoreBoardLength]);
      return;
    }

    if (s > scoreBoard[k - 1]) {
      scoreBoard[k - 1] = s;
      scoreBoard.sort((a, b) => b - a);
    }

    answer.push(scoreBoard[scoreBoardLength - 1]);
  });

  return answer;
}

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));

// https://school.programmers.co.kr/learn/courses/30/lessons/138477
