// 시작 시간(true) 끝나는 시간(false)에 초침과 시침, 분침 위치 확인
function checkEdge (type, h, m, s) {
    // 시간 한 바퀴 기준 각 침의 이동 거리
    const hDist = (h % 12) * 60 * 60 + m * 60 + s;
    const mDist = (m * 60 + s) * 12;
    const sDist = s * 12 * 60;
    let value = 0;
    // 다 같을 때
    if (sDist === hDist && sDist === mDist) value = 1;
    // 둘 다 클 때
    else if (sDist >= hDist && sDist >= mDist) value = type ? 0 : 2;
    // 하나라도 클 때
    else if (sDist >= hDist || sDist >= mDist) value = 1;
    else value = type ? 2 : 0;
    // 11시 59분
    if (h === 11 && m === 59) value = 0;
    return value;
}

function solution(h1, m1, s1, h2, m2, s2) {
    var answer = 0;
    
    const startMinute = h1 * 60 + m1;
    const endMinute = h2 * 60 + m2;
    const startEdge = checkEdge(true, h1, m1, s1);
    const endEdge = checkEdge(false, h2, m2, s2);
    // 같을 때
    if (startMinute === endMinute) {
        if (startEdge === 2 && endEdge === 2) answer = 2;
        else if (startEdge === 1 && endEdge === 2) answer = 1;
    }
    else {
        // 시작
        answer += startEdge;
        console.log(startEdge)
        // 중간
        if (endMinute - startMinute - 1 > 0){
            answer += (endMinute - startMinute - 1) * 2;
            // 59분에는 분침 알람이 안울린다
            answer -= h2 - h1;
            // 11시 59분에는 시침 분침 알람이 안울린다
            if (startMinute < 11 * 60 + 59 && endMinute > 11 * 60 + 59) answer -= 1;
            // 정각에는 알람이 한번만 울린다
            if (startMinute < 12 * 60 && endMinute > 12 * 60) answer -= 1; 
        }
        // 끝
        answer += endEdge;
        console.log(endEdge)
    }
    
    return answer;
}