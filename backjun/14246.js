let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let n = +input[0];
let arr = input[1].split(" ").map((el) => +el);
let k = +input[2];

function solution(n, arr, k) {
  let result = 0;
  let sum = 0;
  const sumArray = [];
  let end = 0;

  while (end < n) {
    sum += arr[end];
    end += 1;
    sumArray.push(sum);
  }

  for (let i = 0; i < n; i += 1) {
    let start = 0;
    let curSum = sumArray[i];
    while (curSum > k) {
      result += 1;
      curSum -= arr[start];
      start += 1;
    }
  }

  return result;
}

console.log(solution(n, arr, k));
