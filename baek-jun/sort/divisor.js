// 1037번 약수

// const fs = require('fs');
// const [count , input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input){
    const data = input.split(' ');
    data.sort((a, b) => a - b)
    return data[0] * data[data.length-1]
}

console.log(solution(input))