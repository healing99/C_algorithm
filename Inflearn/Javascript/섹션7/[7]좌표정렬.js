// 섹션7 - [7]: 좌표 정렬

function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer;
}

const arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
// [ [ 1, 2 ], [ 1, 3 ], [ 2, 5 ], [ 2, 7 ], [ 3, 6 ] ]
console.log(solution(arr));
