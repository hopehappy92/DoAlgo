function solution(lottos, win_nums) {
  const notZeroNums = lottos.reduce((acc, curr) => {
    if (curr) {
      acc.push(curr);
    }
    return acc;
  }, []);

  const zeroCount = lottos.length - notZeroNums.length;

  let yesNum = 0;
  win_nums.forEach((num) => {
    if (notZeroNums.includes(num)) {
      yesNum += 1;
    }
  });

  const winningDict = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  return [winningDict[zeroCount + yesNum], winningDict[yesNum]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

// https://school.programmers.co.kr/learn/courses/30/lessons/77484
