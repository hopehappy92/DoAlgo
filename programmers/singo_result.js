function solution(id_list, report, k) {
  const singoDict = {};
  const goMailUser = [];

  id_list.forEach((id) => {
    singoDict[id] = [0];
  });

  report.forEach((rep) => {
    const [send, receive] = rep.split(" ");

    if (!singoDict[send].includes(receive)) {
      singoDict[send].push(receive);
      singoDict[receive][0] += 1;

      if (singoDict[receive][0] >= k) {
        goMailUser.push(receive);
      }
    }
  });

  return Object.values(singoDict).map((val) => {
    const [_, ...rest] = val;

    let count = 0;
    rest.forEach((user) => {
      if (goMailUser.includes(user)) {
        count += 1;
      }
    });

    return count;
  });
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);

// https://school.programmers.co.kr/learn/courses/30/lessons/92334

/**
 * 이건 풀다가 시간초과로 터짐
function solution(id_list, report, k) {
    const singoMap = {}
    const noUseCountMap = {}
    id_list.forEach(id => {
        singoMap[id] = []
        noUseCountMap[id] = 0
    })
    const answer = []
    
    const dupReport = report.reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            const [send, receive] = curr.split(' ')
            singoMap[send].push(receive)
            noUseCountMap[receive] += 1
            acc.push(curr)            
        }
        return acc
    }, [])
    
    for (let singo in singoMap) {
        let count = 0
        singoMap[singo].forEach(s => {
            if (noUseCountMap[s] >= k) {
                count += 1
            }
        })
        answer.push(count)
    }
    
    return answer;
}
 */

/**
 * 이건 공부해보기
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}
 */
