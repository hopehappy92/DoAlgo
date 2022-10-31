let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let N = +input[0];
let arr = [0];
arr.push(...input.slice(1).map((el) => +el));

let answer = new Array(N + 1).fill(0);
let visitied;
let end;

function solution(node) {
  if (answer[node]) return false;

  if (!visitied[node]) {
    visitied[node] = 1;
    return solution(arr[node]);
  }

  if (node === end) return true;

  return false;
}

for (let i = 1; i <= N; i += 1) {
  visitied = new Array(N + 1).fill(0);
  end = i;
  let isSame = solution(i);

  if (isSame) {
    visitied.forEach((v, i) => {
      if (v) answer[i] = 1;
    });
  }
}

console.log(
  answer
    .reduce((acc, curr, idx) => {
      if (curr) {
        acc.push(idx);
      }
      if (idx === answer.length - 1) {
        acc.unshift(acc.length);
      }
      return acc;
    }, [])
    .join("\n")
);
