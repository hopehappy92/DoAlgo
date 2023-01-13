function solution(s) {
  const NUMBER_DICT = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const NUM_ARRAY = Object.values(NUMBER_DICT);

  let answer = "";
  let i = 0;
  let j = 1;
  for (j; j <= s.length; ) {
    const stringNum = s.slice(i, j);

    if (NUM_ARRAY.includes(stringNum)) {
      answer += stringNum;
      i = j;
    } else if (NUMBER_DICT[stringNum]) {
      answer += NUMBER_DICT[stringNum];
      i = j;
    }

    j += 1;
  }

  return Number(answer);
}

console.log(solution("23four5six7"));

// https://school.programmers.co.kr/learn/courses/30/lessons/81301
