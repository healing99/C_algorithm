// 숫자의 표현 https://school.programmers.co.kr/learn/courses/30/lessons/12924

// 💡 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 주어진 수의 홀수인 약수 개수는 같다
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }
  return answer;
}

// 💡 연속된 자연수의 합이 k(2a+(k-1))/2 = n
function solution2(n) {
  let count = 0;
  // 찾고자 하는 것은 연속된 자연수의 합이 n을 초과하는 첫 번째 시점!
  // n이 특정 k에서 초과되는지 여부를 확인
  // (2ak+k(k-1)) / 2 < n
  // k(k-1) < 2 * n
  for (let k = 1; k * (k - 1) < 2 * n; k++) {
    // 시작점 a가 자연수여야한다. => 2n-k(k-1)이 2k로 나누어 떨어져야함
    if ((2 * n - k * (k - 1)) % (2 * k) === 0) {
      count++;
    }
  }
  return count;
}
