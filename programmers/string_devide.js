function solution(s) {
  let answer = 0;

  // 이중 for 말고 단일 for로 풀 수 있음
  let leftCount = 0;
  let rightCount = 0;
  for (let i = 0; i < s.length; i += 1) {
    const firstChar = s[i];
    leftCount = 1;
    rightCount = 0;

    let endFlag = false;
    for (let j = i + 1; j < s.length; j += 1) {
      if (s[j] === firstChar) {
        leftCount += 1;
      } else {
        rightCount += 1;
      }

      if (leftCount === rightCount) {
        answer += 1;
        i = j;
        break;
      }

      if (j === s.length - 1) {
        endFlag = true;
      }
    }

    if (endFlag) {
      break;
    }
  }

  console.log(leftCount, rightCount);

  return leftCount !== rightCount ? answer + 1 : answer;
}

console.log(solution("aaaaaab"));

// https://school.programmers.co.kr/learn/courses/30/lessons/140108
