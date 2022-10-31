let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let [A, B, C] = input[0].split(" ").map((el) => +el);
let visited = Array.from(Array(A + 1), () => Array(B + 1).fill(0));
let answer = [];
let water;
let queue;

function pour(x, y) {
  if (!visited[x][y]) {
    queue.push([x, y]);
    visited[x][y] = 1;
  }
}

function solution() {
  queue = [[0, 0]];
  visited[0][0] = 1;

  while (queue.length) {
    let [x, y] = queue.shift();
    let z = C - x - y;

    if (x === 0) {
      answer.push(z);
    }

    // atob
    water = Math.min(x, B - y);
    pour(x - water, y + water);

    // atoc
    water = Math.min(x, C - z);
    pour(x - water, y);

    // btoa
    water = Math.min(y, A - x);
    pour(x + water, y - water);

    // btoc
    water = Math.min(y, C - z);
    pour(x, y - water);

    // ctoa
    water = Math.min(z, A - x);
    pour(x + water, y);

    // ctob
    water = Math.min(z, B - y);
    pour(x, y + water);
  }

  return answer.sort((a, b) => a - b).join(" ");
}

console.log(solution());
