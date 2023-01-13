function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i += 1) {
    let primeCount = 1;
    for (let num = 1; num <= i / 2; num += 1) {
      if (!(i % num)) {
        primeCount += 1;
      }
    }

    if (primeCount % 2) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}

console.log(solution(13, 17));

// https://school.programmers.co.kr/learn/courses/30/lessons/77884
