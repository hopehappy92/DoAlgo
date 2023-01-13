function solution(n) {
  const dp = Array(60000).fill(0);

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 3
console.log(solution(4)); // 5
console.log(solution(5)); // 8
console.log(solution(6)); // 13
console.log(solution(7)); // 21
