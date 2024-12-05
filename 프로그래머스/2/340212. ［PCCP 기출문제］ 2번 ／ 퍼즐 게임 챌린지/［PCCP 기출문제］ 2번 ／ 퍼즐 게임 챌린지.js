function solution(diffs, times, limit) {
    let start = 1 
    let end = 100000
    while(start <= end){
        let mid = parseInt((start + end) / 2)
        let value = cal(mid, diffs, times, limit)
        if(value){
            end = mid-1 
        }else{
            start = mid+1
        }
    }
    return start
    
    //diffs와 times 을 받아서 limit 이하 시간이면 true 아니면, false 
    function cal(level, diffs, times,limit){
        let result = 0; 
        for(let i=0; i<diffs.length; i++){
            if(level >= diffs[i]){
                result += times[i]
                if(result > limit) return false
            }else{
                let cnt = diffs[i]-level
                let amount = (times[i] + times[i-1] ) * cnt + times[i]
                result += amount 
                if(result > limit) return false
            }
        }
        if(result <= limit) return true 
        else return false
    }
}
