function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i += 1) {
    totalPrice += price * i;
  }

  const answer = money - totalPrice;

  return answer > 0 ? 0 : -answer;
}

console.log(solution(3, 20, 4));

// https://school.programmers.co.kr/learn/courses/30/lessons/82612
