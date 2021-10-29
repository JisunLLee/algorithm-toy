//2110번  공유기 설치.

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input){
    const N = Number(input[0].split(' ')[0]);
    const C = Number(input[0].split(' ')[1]);
    input.shift();

    input.sort((a, b) => a - b);
    let start = 1;
    let end = input[input.length-1];

    while(start <= end){
        const mid = Math.floor((start + end) / 2);

        
    }


    return input
}

const input =['5 3', 1, 2, 8, 4, 9]
console.log(solution(input))