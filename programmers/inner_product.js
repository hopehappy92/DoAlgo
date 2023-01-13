function solution(a, b) {
  return a.reduce((acc, curr, i) => (acc += curr * b[i]), 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

// https://school.programmers.co.kr/learn/courses/30/lessons/70128
