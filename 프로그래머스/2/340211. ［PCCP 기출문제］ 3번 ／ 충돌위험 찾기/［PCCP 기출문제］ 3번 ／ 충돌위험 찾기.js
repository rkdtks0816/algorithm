function solution(points, routes) {
 
    // 현재 row,column 와 타겟으로 포인트의 row와 column 넣으면
    // 한칸 이동했을 때 좌표를 반환한다.
    const getNextPosition =(r,c,targetR,targetC)=>{
        if(r!==targetR) return r > targetR ? [r-1,c] : [r+1,c]
        if(c!==targetC) return c > targetC ? [r,c-1] : [r,c+1]
        return [r,c]
    }
 
    let arr = []
    let maxIndex = 0
    routes.forEach((route)=>{
        let startPoint = route.shift()
        let history =[points[startPoint-1]]
        
        while(route.length){
            let [nowR,nowC] = history.at(-1)
            let [targetR,targetC] = points[route[0]-1]
            
            let [nextR,nextC] = getNextPosition(nowR,nowC,targetR,targetC)
            
            history.push([nextR,nextC])
            if(nextR === targetR && nextC === targetC){
                route.shift()
            }
        }
        // 로봇들이 각자 이동하는 시간이 모두 다를 수 있으므로 최대로 걸리는 시간을 알아야함 
        maxIndex = Math.max(maxIndex,history.length-1)
        arr.push(history)
    })
 
    let answer = 0
    let index = 0
    while(index<=maxIndex){
        let crushPoints = []
        for(let i=0; i<arr.length-1; i++){
            for(let j=i+1; j<arr.length; j++){
                if(
                    arr[i][index] && arr[j][index] &&
                    arr[i][index][0]===arr[j][index][0] 
                    && arr[i][index][1]===arr[j][index][1]
                ){
                    
                    let alreadyInclude = crushPoints.some(
                        (point)=>point[0]===arr[i][index][0] && point[1]===arr[i][index][1]
                    )
                    if(!alreadyInclude){
                        crushPoints.push([arr[i][index][0],arr[i][index][1]])
                        ++answer 
                    }       
                }
            }
        }
        ++index
    }
 
    return answer
}