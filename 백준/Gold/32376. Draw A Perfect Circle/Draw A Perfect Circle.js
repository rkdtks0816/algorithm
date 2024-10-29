const input = require('fs')
    .readFileSync('/dev/stdin', 'utf-8')
    .trim()
    .split('\n')
    .map(line => line.split(' ').map(Number));

const N = input[0][0];
const K = input[0][1];

const dists = [];
for (let ni = 1; ni <= N; ni++) {
    const nowX = input[ni][0];
    const nowY = input[ni][1];
    const nowDist = Math.sqrt(nowX * nowX + nowY * nowY);
    dists.push(nowDist);
}
dists.sort((a, b) => a - b);  // 거리를 오름차순으로 정렬

let maxPercentage = 0;

for (let i = 0; i < N; i++) {
    // 이분 탐색으로 K 범위 내의 마지막 거리 찾기
    let left = i;
    let right = N - 1;
    let lastInRange = i;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (dists[mid] <= dists[i] + K) {
            lastInRange = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    const tempCount = lastInRange - i + 1;
    const percentage = (tempCount / N * 100).toFixed(6);
    maxPercentage = Math.max(maxPercentage, percentage);
}

console.log(maxPercentage);
