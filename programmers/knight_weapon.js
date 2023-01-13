function solution(number, limit, power) {
  let answer = 1;

  function getPrimeCount(num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i += 1) {
      if (!(num % i)) {
        if (i ** 2 === num) {
          count += 1;
        } else {
          count += 2;
        }
      }
    }
    return count;
  }

  for (let i = 2; i <= number; i += 1) {
    const primeCount = getPrimeCount(i);

    if (primeCount > limit) {
      answer += power;
    } else {
      answer += primeCount;
    }
  }

  return answer;
}

console.log(solution(10, 3, 2));

// https://school.programmers.co.kr/learn/courses/30/lessons/136798
