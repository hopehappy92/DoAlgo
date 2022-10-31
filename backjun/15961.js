let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let [N, d, k, c] = input[0].split(" ").map((el) => +el);
let arr = input.slice(1);

function solution(N, d, k, c, arr) {
  let result = 0;
  let doubleArray = [...arr, ...arr];

  for (let start = 0; start < N; start += 1) {
    let end = start + k;

    const sushiSet = new Set(doubleArray.slice(start, end));
    sushiSet.add(`${c}`);

    result = Math.max(result, sushiSet.size);
  }

  return result;
}

console.log(solution(N, d, k, c, arr));

/**
 * Object로 했을때 > 시간 초과
 * Array로 해도 > 시간초과
 * Set으로 해도 > 시간초과
 * string으로 해도 > 시간초과
 * 어디가 문제일까;
 */
