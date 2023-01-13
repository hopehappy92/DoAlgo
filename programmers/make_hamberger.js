function solution(ingredient) {
  let answer = 0;

  const hamberger = "1231";
  let ingredientString = ingredient.join("");

  // for와 splice 사용해서 풀어보기
  let i = 0;
  while (i < ingredientString.length) {
    const canHamberger = ingredientString.slice(i, i + 4);

    if (hamberger === canHamberger) {
      ingredientString =
        ingredientString.slice(0, i) + ingredientString.slice(i + 4);
      i -= 3;
      answer += 1;
    } else {
      i += 1;
    }
  }

  return answer;
}

console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));

// https://school.programmers.co.kr/learn/courses/30/lessons/133502
