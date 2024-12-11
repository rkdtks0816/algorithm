function detechDirection(start, end) {
    return end > start ? 1 : -1;
}

function solution(points, routes) {
    var answer = 0;
    // 방문해야하는 포인트 수
    const maxPoint = routes[0].length - 1;
    // 로봇 타겟 인덱스
    const targets = new Array(routes.length).fill(1);
    // 도착한 로봇 수
    let robotCnt = 0;
    // 현재 로봇 위치
    let curPosition = routes.map(([start]) => [...points[start - 1]]);
    // 모든 로봇이 도착 할 때까지
    while (robotCnt < routes.length) {
        // 위치 카운트
        let positionMap = new Map();
        for (let i = 0; i < routes.length; i++) {
            const robot = curPosition[i];
            const robotKey = JSON.stringify(robot);
            const target = points[routes[i][targets[i]] - 1];
            if (targets[i] === maxPoint + 1) {
                positionMap.set(robotKey, (positionMap.get(robotKey) || 0) + 1);
                if (positionMap.get(robotKey) === 2) answer++;
                targets[i]++;
                robotCnt++;
            }
            if (targets[i] <= maxPoint) {
                positionMap.set(robotKey, (positionMap.get(robotKey) || 0) + 1);
                if (positionMap.get(robotKey) === 2) answer++;
                // r 이동
                if (robot[0] !== target[0]) {
                    robot[0] += detechDirection(robot[0], target[0]);
                }
                // c 이동
                else if (robot[1] !== target[1]) {
                    robot[1] += detechDirection(robot[1], target[1]);
                }
                // 모두 같다면 다음 타겟
                if (robot[0] === target[0] && robot[1] === target[1]){
                    targets[i]++;
                    lastPoint = targets[i] > maxPoint ? true : false;
                }
                curPosition[i] = robot;
                continue;
            }
        }
    }
    return answer;
}