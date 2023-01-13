function solution(n) {
  const ternary = n.toString(3);
  let reverse = "";

  for (let i = ternary.length - 1; i >= 0; i -= 1) {
    reverse += ternary[i];
  }

  return Number.parseInt(reverse, 3);
}

console.log(solution(125));

// https://school.programmers.co.kr/learn/courses/30/lessons/68935
