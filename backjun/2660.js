let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let N = +input[0];
let arr = input.slice(1).map((el) => el.split(" "));

let network = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
arr.forEach((el, idx) => {
  if (idx === arr.length - 1) return;

  network[el[0]][el[1]] = 1;
  network[el[1]][el[0]] = 1;
});

function solution() {
  let answerArr = [];
  let score = 99999;
  let queue = [];

  for (let i = 1; i < N + 1; i += 1) {
    let visited = Array(N + 1).fill(0);
    visited[i] = 1;
    queue.push(i);

    while (queue.length) {
      let q = queue.shift();

      for (let j = 1; j < N + 1; j += 1) {
        if (network[q][j]) {
          if (!visited[j]) {
            visited[j] = visited[q] + 1;
            queue.push(j);
          }
        }
      }
    }

    answerArr.push(Math.max(...visited));
    score = Math.min(score, Math.max(...visited));
  }

  let candidate = 0;
  let answer = answerArr.reduce((acc, curr, idx) => {
    if (curr === score) {
      acc.push(idx + 1);
      candidate += 1;
    }
    return acc;
  }, []);
  return [`${score - 1} ${candidate}`, answer.join(" ")].join("\n");
}

console.log(solution());
