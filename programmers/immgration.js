// 이진탐색. 입국심사. 레벨3

function solution(n, times){

    let start = times[0];
    let end = times[times.length - 1] * n;

    while(start <= end){
        const mid = Math.floor((start + end) / 2);
        const count = times.reduce((acc, crr) => (acc += Math.floor(mid / crr)), 0);

        if(count >= n) {
            end = mid -1
        }
        else if(count < n) {
            start = mid + 1
        }
    }

    return start;
}

const n = 6;
const times = [7, 10]


console.log(solution(n, times));