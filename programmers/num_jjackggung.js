function solution(X, Y) {
  const xNumCountArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const yNumCountArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  X.split("").forEach((x) => {
    xNumCountArray[x] += 1;
  });

  Y.split("").forEach((y) => {
    yNumCountArray[y] += 1;
  });

  let answer = "";
  for (let i = 9; i >= 0; i -= 1) {
    const count = Math.min(xNumCountArray[i], yNumCountArray[i]);

    if (count) {
      // 아래 조건문 없이 return 할 때 `${+answer}`을 하면 Runtime Error 발생
      // js의 Number 타입으로 나타낼 수 있는 숫자의 범위는 최대 300자 정도
      // 문제의 조건에서 주어진 X, Y의 최대 자릿수는 3_000_000
      if (!i && !answer) {
        answer = "0";
      } else {
        answer += "".padEnd(count, i);
      }
    }
  }

  if (!answer) return "-1";

  return answer;
}

console.log(solution("100", "100"));

// https://school.programmers.co.kr/learn/courses/30/lessons/131128

/**
 * 깔끔한 코드
function solution(X, Y) {
    let result = '';
    const numObj = {};

    for (const char of X) {
        numObj[char] = (numObj[char] || 0) + 1;
    }

    for (const char of Y) {
        if (!numObj[char]) continue;
        result += char;
        numObj[char]--;
    }

    if (result === '') return '-1';
    if (+result === 0) return '0';
    return [...result]
        .map((num) => +num)
        .sort((a, b) => b - a)
        .join('');    
}
 */
