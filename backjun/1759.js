let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [L, C] = input[0].split(" ");
const arr = input[1].split(" ");

const sortedArr = arr.sort();
const aeiou = ["a", "e", "i", "o", "u"];
let visited = Array.from({ length: C }).fill(0);
const answer = [];

function combination(count, idx, consonantCount, vowelCount, pwd) {
  if (count > L) return;

  if (count === +L && consonantCount > 1 && vowelCount > 0) {
    answer.push(pwd);
  }

  for (let i = idx; i < C; i += 1) {
    if (visited[i]) continue;

    if (aeiou.includes(sortedArr[i])) {
      vowelCount += 1;
    } else {
      consonantCount += 1;
    }

    visited[i] = 1;
    combination(
      count + 1,
      i,
      consonantCount,
      vowelCount,
      `${pwd}${sortedArr[i]}`
    );
    visited[i] = 0;

    if (aeiou.includes(sortedArr[i])) {
      vowelCount -= 1;
    } else {
      consonantCount -= 1;
    }
  }
}

function solution() {
  combination(0, 0, 0, 0, "");

  return answer.join("\n");
}

console.log(solution());
