function solution(k, m, score) {
  let answer = 0;

  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    if (i + m <= score.length) {
      answer += score[i + m - 1] * m;
    }
  }

  return answer;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));

// https://school.programmers.co.kr/learn/courses/30/lessons/135808
