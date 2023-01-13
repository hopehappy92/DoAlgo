function solution(numbers) {
  const numArr = [];

  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      const sumNum = numbers[i] + numbers[j];
      if (!numArr.includes(sumNum)) numArr.push(sumNum);
    }
  }

  return numArr.sort((a, b) => a - b);
}

console.log(solution([5, 0, 2, 7]));

// https://school.programmers.co.kr/learn/courses/30/lessons/68644
