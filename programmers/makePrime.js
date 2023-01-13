function solution(nums) {
  let answer = 0;

  let i = 0;
  let j = 1;
  let k = 2;

  while (i !== nums.length - 2) {
    let isPrimeNum = nums[i] + nums[j] + nums[k];

    let flag = true;
    for (let n = 2; n <= isPrimeNum / 2; n += 1) {
      if (!(isPrimeNum % n)) {
        flag = false;
        break;
      }
    }

    if (flag) {
      answer += 1;
    }

    if (k !== nums.length - 1) {
      k += 1;
    } else if (j === nums.length - 2) {
      i += 1;
      j = i + 1;
      k = j + 1;
    } else {
      j += 1;
      k = j + 1;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));

// https://school.programmers.co.kr/learn/courses/30/lessons/12977
