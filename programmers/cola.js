function solution(a, b, n) {
  let answer = 0;

  // while로 풀어보기
  function recursive(cur) {
    if (cur < a) {
      return;
    }

    const canReturnCola = Math.floor(cur / a);
    answer += canReturnCola * b;

    recursive(cur - canReturnCola * a + canReturnCola * b);
  }

  recursive(n);
  return answer;
}

/**
 * 20 - 20 + 10 = 10
 * 10 - 10 + 5 = 5
 * 5 - 4 + 2 = 3
 * 3 - 2 + 1 = 2
 * 2 - 2 + 1 = 1
 *
 * 20 - 18 + 6 = 8
 * 8 - 6 + 2 = 4
 * 4 - 3 + 1 = 2
 *
 * 20 - 18 + 12 = 14
 * 14 - 12 + 8 = 10
 * 10 - 9 + 6 = 7
 * 7 - 6 + 4 = 5
 * 5 - 3 + 2 = 4
 * 4 - 3 + 2 = 3
 * 3 - 3 + 2 = 2
 */

console.log(solution(3, 2, 20));

// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b
