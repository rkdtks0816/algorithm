function solution(edges) {
    var answer = [];
    var totalNodeCount = edges.reduce((acc, edge) => {
        return Math.max(acc, ...edge)
    }, -Infinity) + 1
    var inEdges = Array.from({ length: totalNodeCount }, () => [])
    var outEdges = Array.from({ length: totalNodeCount }, () => [])
    
    edges.forEach(item => {
        outEdges[item[0]].push(item[1])
        inEdges[item[1]].push(item[0])
    })
    
    var center = 0
    var pole = 0
    var eight = 0
    
    for (var i = 1; i < totalNodeCount; i++) {
        var inCount = inEdges[i].length
        var outCount = outEdges[i].length
                
        if (inCount == 0 && outCount >= 2) {
            center = i
        } else if (inCount > 0 && outCount == 0) {
            pole += 1
        } else if (inCount >= 2 && outCount >= 2) {
            eight += 1
        }
    }
    
    var totalGraphCount = outEdges[center].length
    var donut = totalGraphCount - pole - eight
    var answer = [center, donut, pole, eight]
    
    return answer;
}