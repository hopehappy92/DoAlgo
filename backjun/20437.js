let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let T = +input[0];

function solution(W, K) {
  const alphaMap = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: [],
  };
  let shortResult = 999999999;
  let longResult = -1;

  for (let i = 0; i < W.length; i += 1) {
    alphaMap[W[i]].push(i);
  }
  Object.entries(alphaMap).forEach(([k, v]) => {
    if (v.length >= K) {
      for (let start = 0; start < v.length - K + 1; start += 1) {
        let end = start + K - 1;
        const range = v[end] - v[start] + 1;

        longResult = Math.max(longResult, range);
        shortResult = Math.min(shortResult, range);
      }
    }
  });

  if (longResult === -1) return "-1";
  return `${shortResult} ${longResult}`;
}

for (let i = 0; i < T; i += 1) {
  let W = input[(i + 1) * 2 - 1];
  let K = +input[(i + 1) * 2];

  console.log(solution(W, K));
}
