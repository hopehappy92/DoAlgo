function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i += 1) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

// https://school.programmers.co.kr/learn/courses/30/lessons/86051
