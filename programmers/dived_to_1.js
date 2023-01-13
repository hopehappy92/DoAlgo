function solution(n) {
  let i = 2;
  while (true) {
    if (n % i === 1) {
      return i;
    }
    i += 1;
  }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/87389
