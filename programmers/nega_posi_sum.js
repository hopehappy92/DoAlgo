function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, curr, idx) => (acc += curr * (signs[idx] ? +1 : -1)),
    0
  );
}

console.log(solution([4, 7, 12], [true, false, true]));

// https://school.programmers.co.kr/learn/courses/30/lessons/76501
