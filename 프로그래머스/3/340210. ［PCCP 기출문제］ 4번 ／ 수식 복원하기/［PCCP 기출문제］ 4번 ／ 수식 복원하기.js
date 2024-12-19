// 10 -> n
function dton (d, nNum) {
    let result = "";
    let nowD = d;
    while(nowD >= nNum){
        result = nowD % nNum + result;
        nowD = Math.floor(nowD / nNum);
    }
    result = String(nowD % nNum) + result;
    return result;
}
// n -> 10 
function ntod (n, nNum) {
    const result = n.split("").reduce((acc, cur, index, array) => {
        acc += Number(cur) * (nNum ** ((array.length - 1) - index));
        return acc;
    }, 0)
    return result;
}
// 연산
function calculateExpression (expression, nNum) {
    const [firstNum, sign, secondNum] = expression;
    const fd = ntod(firstNum, nNum);
    const sd = ntod(secondNum, nNum);
    const answer = sign === "+" ? fd + sd : fd - sd;
    return dton(String(answer), nNum);
}
function solution(expressions) {
    var answer = [];
    const xArr = [];
    const noXArr = [];
    let minN = 0;
    expressions.forEach((expression) => {
        const splitE = expression.split(" ");
        const numArr = [splitE[0], splitE[2]];
        if (splitE[4] === "X") xArr.push(expression);
        else {
            noXArr.push(expression);
            numArr.push(splitE[4]);
        }
        const nums = numArr.join("").split("").map(num => Number(num));
        minN = Math.max(minN, ...nums);
    })
    minN++;
    let nArr = Array.from({length: 10 - minN}, (_, i) => i + minN);
    noXArr.forEach(noX => {
        let newNArr = [];
        nArr.forEach(n => {
            const splitNoX = noX.split(" ");
            const cal = calculateExpression(splitNoX.slice(0, 3), n);
            const noXA = splitNoX[4];
            if (cal === noXA) newNArr.push(n);
        })
        nArr = newNArr;
    })
    xArr.forEach(x => {
        let preX = x;
        nArr.forEach(n => {
            const splitX = preX.split(" ");
            const cal = calculateExpression(splitX.slice(0, 3), n);
            const preA = splitX[4];
            if (preA === "X") splitX[4] = cal;
            else if (cal !== preA) splitX[4] = "?";
            preX = splitX.join(" ");
        })
        answer.push(preX);
    })
    console.log(nArr);
    return answer;
}