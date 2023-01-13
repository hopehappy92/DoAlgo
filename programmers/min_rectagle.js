function solution(sizes) {
  let vertical = 0;
  let horizontal = 0;

  sizes.forEach((size) => {
    const [minS, maxS] = size.sort((a, b) => a - b);

    vertical = Math.max(vertical, minS);
    horizontal = Math.max(horizontal, maxS);
  });

  return vertical * horizontal;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

// https://school.programmers.co.kr/learn/courses/30/lessons/86491
