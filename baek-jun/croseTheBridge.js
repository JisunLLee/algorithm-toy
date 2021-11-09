function Bridge(SumData){
    const sumDatas = SumData.split(" ");
    const sum = Number(sumDatas[0]);
    const j = Number(sumDatas[1]);
    const k = Number(sumDatas[2]);

    ArrJ = { 
        1: 2,
        2: 5,
        3: 4,
        4: 7
    }

    ArrK = {
        2: 3,
        5: 6,
        6: 7
    }
    let answer = "";

    for (let i = 1; i < sum; i ++ ){
        const resultJ = checkN(i, sum, ArrJ);
        const resultk = checkN(i, sum, ArrK);

        resultJ ? answer += "J" : 
            resultk ? answer += "K" : answer += "D"
  
    }
    console.log(answer)
}

function checkN (start, end, arr){
    boolean = true
    if (arr[start]) 
        if (arr[start] === end) {
            boolean = true
        }
        else {checkN(arr[start], end, arr)}
    else {
        boolean = false
        return false}
    return boolean
}


Bridge("7 4 3")
