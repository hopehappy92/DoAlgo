let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [R, C] = input[0].split(" ");
const arr = [];
for (let i = 1; i <= R; i += 1) {
  arr.push(input[i].split(""));
}
let visited = Array.from(Array(+R), () => Array(+C).fill(0));
let answer = 0;

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];

function dfs(y, x, count, alphas) {
  answer = Math.max(answer, count);

  alphas += arr[y][x];

  for (let i = 0; i < 4; i += 1) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (
      ny >= 0 &&
      ny < +R &&
      nx >= 0 &&
      nx < +C &&
      !visited[ny][nx] &&
      !alphas.includes(arr[ny][nx])
    ) {
      visited[y][x] = 1;

      dfs(ny, nx, count + 1, alphas);
      visited[y][x] = 0;
    }
  }
}

function solution() {
  dfs(0, 0, 1, "");

  return answer;
}

console.log(solution());
