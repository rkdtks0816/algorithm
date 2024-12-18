function solution(targets) {
    var answer = 1;
    // 타겟 시작으로 정렬
    targets.sort((r, l) => {
        if (l[0] === r[0]) return r[1] - l[1];
        return r[0] - l[0]
    })
    targets.reduce((acc, cur) => {
        const nextRange = [Math.max(acc[0], cur[0]), Math.min(acc[1], cur[1])];
        if (nextRange[0] < nextRange[1]) return nextRange;
        answer++;
        return cur;
    }, [0, 100000000])
    
    return answer;
}