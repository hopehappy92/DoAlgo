function solution(survey, choices) {
  const MBTIDict = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i += 1) {
    const [left, right] = survey[i].split("");
    const point = choices[i] - 4;

    if (point < 0) {
      MBTIDict[left] += -point;
    } else {
      MBTIDict[right] += point;
    }
  }

  let answer = "";

  const MBTIArray = Object.entries(MBTIDict);

  for (let i = 0; i < MBTIArray.length; i += 2) {
    const cur = MBTIArray[i];
    const comp = MBTIArray[i + 1];

    if (cur[1] >= comp[1]) {
      answer += cur[0];
    } else {
      answer += comp[0];
    }
  }

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));

// https://school.programmers.co.kr/learn/courses/30/lessons/118666

/**
 * map을 분해하는방법
function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}
 */
