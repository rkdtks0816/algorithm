function findC(a, b) {
    return Math.floor(Math.sqrt(a*a - b*b));
}

function solution(r1, r2) {
    var answer = 0;
    // 선을 제외한 점
    for (let ri = 1; ri <= r2; ri++){
        const maxR = Math.floor(Math.sqrt(r2*r2 - ri*ri));
        if (ri < r1) {
            const minR = Math.ceil(Math.sqrt(r1*r1 - ri*ri));
            answer += maxR - minR + 1;
            continue;
        }
        answer += maxR;
    }
    // 4면
    answer *= 4;
    // 선
    answer += (r2 - r1 + 1) * 4;
    
    return answer;
}