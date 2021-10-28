//2512번. 예산

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input){
    const N = Number(input.shift());
    const request = input[0].split(' ').map(Number).sort((a, b)=> a - b);
    const budjet = Number(input[1]);

    const sum = request.reduce((acc, crr) => (acc += crr ), 0);
    let max = 0;

    if (sum <= budjet) {
        return request.pop();
    } else {
        let start = 0;
        let end = request[request.length-1];
        let answer;
        let mid;
        
        while(start <= end){
            mid = Math.floor((start + end) / 2);
            answer = getSum(request, mid);
    
            if(answer <= budjet) {
                start = mid + 1;
                max = Math.max(mid, max);
            }
            else end = mid - 1;
        }
    
        return max;
    }

}

function getSum(arr, target){
    let sum = 0;

    arr.map(v => {
        v <= target ? sum += v : sum += target
    })
    return sum;
}

const input = [4, '120 110 140 150', 485];
// const input = [5, '70 80 30 40 100', 450]
console.log(solution(input))