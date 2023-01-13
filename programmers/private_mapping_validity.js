function solution(today, terms, privacies) {
  const answer = [];

  const termDict = {};
  terms.forEach((term) => {
    const [t, month] = term.split(" ");
    termDict[t] = +month;
  });

  privacies.forEach((privacy, idx) => {
    const [collectDay, term] = privacy.split(" ");

    const cDate = new Date(collectDay);

    if (
      new Date(today) >=
      new Date(cDate.setMonth(cDate.getMonth() + termDict[term]))
    ) {
      answer.push(idx + 1);
    }

    // 마지막 비교를 굳이 date로 할 필요가 없음

    // const [cYear, cMonth, cDay] = collectDay.split(".").map((el) => +el);

    // let endYear = cYear;
    // let endMonth = cMonth + termDict[term];
    // let endDay = cDay - 1;

    // if (endMonth > 12) {
    //   endYear += Math.floor(endMonth / 12);
    //   endMonth = endMonth % 12 || 1;
    // }

    // if (endDay === 0) {
    //   endDay = 28;

    //   if (endMonth === 1) {
    //     endMonth = 12;
    //     endYear -= 1;
    //   } else {
    //     endMonth -= 1;
    //   }
    // }

    // if (new Date(today) > new Date(`${endYear}-${endMonth}-${endDay}`)) {
    //   answer.push(idx + 1);
    // }
  });

  return answer;
}

// console.log(solution("2022.02.28", ["A 23"], ["2020.01.28 A"]));

// console.log(
//   solution(
//     "2022.05.19",
//     ["A 19", "B 24", "C 23"],
//     ["2021.05.02 A", "2021.07.01 B", "2022.02.19 B", "2022.01.02 C"]
//   )
// );

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);

// https://school.programmers.co.kr/learn/courses/30/lessons/150370
