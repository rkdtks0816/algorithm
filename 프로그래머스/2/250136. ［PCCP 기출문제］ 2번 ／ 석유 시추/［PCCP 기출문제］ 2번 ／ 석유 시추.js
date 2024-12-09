function solution(land) {
    var answer = 0;
    const depth = land.length;
    const width = land[0].length;

    const visitedMap = land.map(_ => new Array(width).fill(0));

    let oilIdx = 1

    const oilMap = new Map();
    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]

    function bfs(y, x) {
        let oil = 0;
        const queue = [[y, x]];
        visitedMap[y][x] = oilIdx

        while (queue.length > 0) {
            const [cy, cx] = queue.shift();
            if (land[cy][cx] === 1) {
                oil++;
            }

            for (const [dy, dx] of directions) {
                const y = cy + dy;
                const x = cx + dx;
                if (y < 0 || x < 0 || y >= depth || x >= width || visitedMap[y][x] !== 0 ) {
                    continue;
                }

                if (land[y][x]) {
                    visitedMap[y][x] = oilIdx;
                    queue.push([y, x]);
                }
            }
        }

        oilMap[oilIdx] = oil;
        oilIdx++;
        return oil;
    }

    for (let x = 0; x < width; x++){
        for (let y = 0; y < depth; y++){
            if (visitedMap[y][x] === 0 && land[y][x] > 0) {
                bfs(y, x);
            }
        }
    }

    for (let x = 0; x < width; x++){
        let oilVolume = 0;
        const set = new Set();
        for (let y = 0; y < depth; y++){
            const oilIdx = visitedMap[y][x];
            if (oilIdx !== 0 && !set.has(oilIdx)) {
                set.add(visitedMap[y][x])
            }
        }
        set.forEach(oid => {
            oilVolume += oilMap[oid];
        })

        answer = answer <= oilVolume ? oilVolume : answer
    }

    return answer;
}