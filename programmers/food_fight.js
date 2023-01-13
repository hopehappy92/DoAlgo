function solution(food) {
  let leftAnswer = "";
  let rightAnswer = "";

  food.forEach((f, idx) => {
    if (!idx) return;

    const count = Math.floor(f / 2);
    if (count) {
      const foods = `${idx}`.repeat(count);
      leftAnswer += foods;
      rightAnswer = foods + rightAnswer;
    }
  });

  return `${leftAnswer}0${rightAnswer}`;
}

console.log(solution([1, 3, 4, 6]));

// https://school.programmers.co.kr/learn/courses/30/lessons/134240
