function solution(s) {
  let answer = 9999999;

  const sLength = s.length;
  const maximum = Math.ceil(sLength / 2);
  for (let i = 1; i <= maximum; i += 1) {
    let zipWord = "";
    for (let j = 0; j < sLength; j += i) {
      // console.log(s.slice(j, j + i));

      let cnt = 0;
      const unitWord = s.slice(j, j + i);

      for (let k = 1; k <= sLength / i; k += 1) {
        // console.log(i, j, k, s.slice(j + i * (k - 1), +j + i * k));
        if (unitWord === s.slice(j + i * (k - 1), +j + i * k)) {
          cnt += 1;
        } else {
          break;
        }
      }

      // console.log("cnt", cnt);
      j += i * (cnt - 1);
      zipWord += `${cnt > 1 ? cnt : ""}${unitWord}`;
    }
    // console.log(zipWord);
    answer = Math.min(answer, zipWord.length);
  }

  return answer;
}

console.log(solution("ababcdcdababcdcd"));
