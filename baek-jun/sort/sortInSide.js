
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(num => parseInt(num));


function solution(input) {
    return input.sort((a, b) => b - a).join('');
}

const input = [2,1,4,3]
console.log(solution(input));
