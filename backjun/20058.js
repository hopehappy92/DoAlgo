let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let [N, Q] = input[0].split(" ").map((el) => +el);
let arr = [];
input.slice(1, input.length - 1).forEach((row) => {
  arr.push(row.split(" ").map((el) => +el));
});
let L = input[input.length - 1].split(" ").map((el) => +el);

let nPower = 2 ** N;

let dy = [0, 0, 1, -1];
let dx = [1, -1, 0, 0];

function dfs() {}

function melting() {
  meltingBoard = Array.from(Array(nPower), () => Array(nPower).fill(0));
  for (let y = 0; y < nPower; y += 1) {
    for (let x = 0; x < nPower; x += 1) {
      let cnt = 0;
      for (let i = 0; i < 4; i += 1) {
        let ny = y + dy[i];
        let nx = x + dx[i];
        if (ny < nPower && ny >= 0 && nx < nPower && nx >= 0 && arr[ny][nx]) {
          cnt += 1;
        }
        if (arr[y][x] > 0) {
          if (cnt < 3) {
            meltingBoard[y][x] = arr[y][x] - 1;
          } else {
            meltingBoard[y][x] = arr[y][x];
          }
        }
      }
    }
  }
  return meltingBoard;
}

function rotate(l) {
  let lPower = 2 ** L;
  rotateBoard = Array.from(Array(nPower), () => Array.from(nPower).fill(0));
  for (let y = 0; y < nPower; y += lPower) {
    for (let x = 0; x < nPower; x += lPower) {
      for (let m = 0; m < lPower; m += 1) {
        for (let n = 0; n < lPower; n += 1) {
          rotateBoard[y + n][x + lPower - m - 1] = arr[y + m][x + n];
        }
      }
    }
  }
  return rotateBoard;
}

function solution() {
  for (let q = 0; q < Q; q += 1) {
    arr = rotate(L[q]);
    arr = melting();
    console.log(arr);
  }

  dfs();
}

console.log(solution());
