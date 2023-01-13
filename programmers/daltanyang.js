function solution(number) {
  let answer = 0;

  const numLength = number.length;
  let i = 0;
  let j = 1;
  let k = 2;

  while (i !== numLength - 2) {
    if (number[i] + number[j] + number[k] === 0) {
      answer += 1;
    }

    k += 1;

    if (k === numLength) {
      j += 1;
      k = j + 1;
    }

    if (j === numLength - 1) {
      i += 1;
      j = i + 1;
      k = j + 1;
    }
  }

  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));

// https://school.programmers.co.kr/learn/courses/30/lessons/131705
