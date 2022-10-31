let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map((el) => +el);
let arr = [];
input.slice(1).forEach((el) => {
  arr.push(el.split(""));
});

let visited = Array.from(Array(N), () =>
  Array.from(Array(M), () => Array.from(Array(N), () => Array(M).fill(0)))
);

console.log(visited);

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

function andValidCondition(y, x) {
  return y >= 0 && y < N && x >= 0 && x < M;
}

function orInValidCondition(y, x) {
  return y < 0 || y >= N || x < 0 || x >= M;
}

function solution() {
  let coins = [];

  for (let n = 0; n < N; n += 1) {
    for (let m = 0; m < M; m += 1) {
      if (arr[n][m] === "o") {
        coins.push(n);
        coins.push(m);
      }
    }
  }

  visited[coins[0]][coins[1]][coins[2]][coins[3]] = 1;

  while (coins.length) {
    let y1 = coins.shift();
    let x1 = coins.shift();
    let y2 = coins.shift();
    let x2 = coins.shift();

    if (visited[y1][x1][y2][x2] > 10) {
      return -1;
    }

    for (let i = 0; i < 4; i += 1) {
      let ny1 = y1 + dy[i];
      let nx1 = x1 + dx[i];
      let ny2 = y2 + dy[i];
      let nx2 = x2 + dx[i];

      if (orInValidCondition(ny2, nx2) && orInValidCondition(ny1, nx1)) {
        continue;
      }

      if (andValidCondition(ny1, nx1) && orInValidCondition(ny2, nx2)) {
        return visited[y1][x1][y2][x2];
      }

      if (andValidCondition(ny2, nx2) && orInValidCondition(ny1, nx1)) {
        return visited[y1][x1][y2][x2];
      }

      if (arr[ny1][nx1] === "#") {
        ny1 = y1;
        nx1 = x1;
      }

      if (arr[ny2][nx2] === "#") {
        ny2 = y2;
        nx2 = x2;
      }

      if (!visited[ny1][nx1][ny2][nx2]) {
        visited[ny1][nx1][ny2][nx2] = visited[y1][x1][y2][x2] + 1;
        coins.push(ny1);
        coins.push(nx1);
        coins.push(ny2);
        coins.push(nx2);
      }
    }
  }

  return -1;
}

console.log(solution());
