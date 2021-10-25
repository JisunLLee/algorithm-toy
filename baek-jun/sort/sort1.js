// 2750번 수 정렬하기

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));


input = [5,5,4,2,3,1]
const N = input.shift();
const sorted = input.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
    console.log(sorted[i]);
}

