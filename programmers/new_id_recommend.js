function solution(newId) {
  newId = newId.toLowerCase();

  const regex = /[^a-z0-9\-\_\.]/g;
  newId = newId.replace(regex, "");

  const dotRegex = /\.{2,}/g;
  newId = newId.replace(dotRegex, ".");

  if (newId[0] === ".") {
    newId = newId.slice(1);
  }

  if (newId.at(-1) === ".") {
    newId = newId.slice(0, newId.length - 1);
  }

  if (!newId) {
    newId = "a";
  }

  if (newId.length > 15) {
    newId = newId.slice(0, 15);
  }

  if (newId.at(-1) === ".") {
    newId = newId.slice(0, newId.length - 1);
  }

  if (newId.length <= 2) {
    while (newId.length < 3) {
      newId += newId.at(-1);
    }
  }

  return newId;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm..."));
console.log(solution("z-+.^."));

// https://school.programmers.co.kr/learn/courses/30/lessons/72410
