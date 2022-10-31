let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const arr = [];
input.forEach((el) => {
  arr.push(el.split(""));
});
let visited;
const combVisited = Array.from(Array(5), () => Array(5).fill(0));
const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];
let answer = 0;

function isConnect(y, x) {
  let count = 1;
  visited[y][x] = 1;

  for (let i = 0; i < 4; i += 1) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (
      ny >= 0 &&
      ny < 5 &&
      nx >= 0 &&
      nx < 5 &&
      !visited[ny][nx] &&
      combVisited[ny][nx]
    ) {
      count += isConnect(ny, nx);
    }
  }

  return count;
}

function combDfs(idx, sCount, depth) {
  if (depth === 7) {
    if (sCount >= 4) {
      visited = Array.from(Array(5), () => Array(5).fill(0));
      let y = Math.floor(idx / 5);
      let x = idx % 5;
      if (isConnect(y, x) === 7) {
        answer += 1;
      }
    }
    return;
  }

  for (let i = idx; i < 25; i += 1) {
    let y = Math.floor(i / 5);
    let x = i % 5;

    if (combVisited[y][x] === 1) continue;

    combVisited[y][x] = 1;
    combDfs(i, arr[y][x] === "S" ? sCount + 1 : sCount, depth + 1);
    combVisited[y][x] = 0;
  }
}

function solution() {
  combDfs(0, 0, 0);

  return answer;
}

console.log(solution());

// function coordinateToIdx(y, x) {
//   return y * 5 + x;
// }

// function idxToCoordinate(idx) {
//   return [Math.floor(idx / 5), idx % 5];
// }

// function isValid(combArr) {
//   let result = true;
//   let yCount = 0;

//   combArr.forEach((el) => {
//     let [y, x] = idxToCoordinate(el);
//     if (arr[y][x] === "Y") yCount += 1;
//     if (yCount > 3) {
//       result = false;
//       return;
//     }
//   });

//   return result;
// }

// let comparedArr;
// function isConnect(cArr, y, x) {
//   visited[y][x] = 1;
//   comparedArr = comparedArr.filter((el) => el !== coordinateToIdx(y, x));
//   comparedArr = []

//   if (comparedArr.length === 0) {
//     answer += 1;
//   }

//   for (let i = 0; i < 4; i += 1) {
//     let ny = y + dy[i];
//     let nx = x + dx[i];

//     if (
//       ny >= 0 &&
//       ny < 5 &&
//       nx >= 0 &&
//       nx < 5 &&
//       cArr.includes(coordinateToIdx(ny, nx)) &&
//       !visited[ny][nx]
//     ) {
//       isConnect(cArr, ny, nx);
//     }
//   }
// }

// const combLength = 25;
// const combVisited = Array(25).fill(0);

// function combination(idx, combArr) {
//   if (combArr.length === 7) {
//     visited = Array.from(Array(5), () => Array(5).fill(0));
//     if (isValid(combArr)) {
//       comparedArr = [...combArr];
//       isConnect(combArr, ...idxToCoordinate(combArr[0]), combArr);
//     }
//     return;
//   }

//   for (let i = idx; i < combLength; i += 1) {
//     if (combVisited[i]) continue;

//     combVisited[i] = 1;
//     combArr.push(i);
//     combination(i, combArr);
//     combVisited[i] = 0;
//     combArr.pop();
//   }
// }

// function solution() {
//   combination(0, []);

//   return answer;
// }

// console.log(solution());
