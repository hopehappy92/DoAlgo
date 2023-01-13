function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i += 1) {
    const partChar = t.slice(i, i + p.length);

    if (+p >= +partChar) {
      answer += 1;
    }
  }

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/147355
