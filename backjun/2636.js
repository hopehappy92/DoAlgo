let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map((el) => +el);
let arr = [];
input.slice(1).forEach((row) => {
  arr.push(row.split(" ").map((el) => +el));
});
let dy = [0, 0, 1, -1];
let dx = [1, -1, 0, 0];
let visitied;

function dfs(y, x) {
  visitied[y][x] = 1;

  for (let i = 0; i < 4; i += 1) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (ny >= n || ny < 0 || nx >= m || nx < 0) continue;

    if (arr[ny][nx] === 1 && visitied[ny][nx] === 0) {
      visitied[ny][nx] = 1;
      arr[ny][nx] = 0;
    }

    if (arr[ny][nx] === 0 && visitied[ny][nx] === 0) {
      dfs(ny, nx);
    }
  }
}

function solution() {
  let cnt = 0;
  let lastCheese;
  while (true) {
    tempLastCheese = 0;
    arr.forEach((row) =>
      row.forEach((el) => {
        if (el) tempLastCheese += 1;
      })
    );
    if (!tempLastCheese) break;

    cnt += 1;
    lastCheese = tempLastCheese;
    visitied = Array.from(Array(n), () => Array(m).fill(0));
    dfs(0, 0);
  }

  return [cnt, lastCheese];
}

console.log(solution().join("\n"));
