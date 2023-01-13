function solution(nums) {
  const maxAnswer = nums.length / 2;

  const filteredNums = nums.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  return Math.min(maxAnswer, filteredNums.length);
}

console.log(solution([3, 3, 3, 2, 2, 2]));
