function solution(edges) {
    var answer = [0, 0, 0, 0];
    // 간선 정보 [들어오는 간선, 나가는 간선]
    const degrees = edges.reduce((map, edge) => {
        const [start, end] = edge;

        if (!map.has(start)) {
            map.set(start, [0, 1]);
        } else {
            const [inDegree, outDegree] = map.get(start);
            map.set(start, [inDegree, outDegree + 1]);
        }

        if (!map.has(end)) {
            map.set(end, [1, 0]);
        } else {
            const [inDegree, outDegree] = map.get(end);
            map.set(end, [inDegree + 1, outDegree]);
        }

        return map;
    }, new Map());
    for(const [edge, degree] of degrees){ 
        const [inDegree, outDegree] = degree;  
        if( 2 <= outDegree && inDegree == 0) { 
            answer[0] = edge;
        } else if(outDegree == 0) {
            answer[2]++;
        } else if(outDegree >= 2 && inDegree >= 2){
            answer[3]++;
        }  
    } 
    answer[1] = degrees.get(answer[0])[1] - answer[2] - answer[3];
    return answer;
}