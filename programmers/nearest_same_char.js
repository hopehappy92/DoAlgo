function solution(s) {
  const answer = [];
  const charArray = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  // charArray 없이 map으로 풀 수 있음
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (!charArray[char]) {
      answer.push(-1);
    } else {
      answer.push(i + 1 - charArray[char]);
    }

    charArray[char] = i + 1;
  }

  return answer;
}

console.log(solution("banana"));

// https://school.programmers.co.kr/learn/courses/30/lessons/142086
