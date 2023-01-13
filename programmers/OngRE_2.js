function solution(babbling) {
  let answer = 0;
  const bab = [/aya/g, /ye/g, /woo/g, /ma/g];
  const notBab = ["ayaaya", "yeye", "woowoo", "mama"];

  for (let babble of babbling) {
    if (notBab.every((nb) => !babble.includes(nb))) {
      for (const ba of bab) {
        babble = babble.replace(ba, " ");
      }
    }

    // console.log(babble);

    if (!babble.trim()) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(["aayaya"]));
