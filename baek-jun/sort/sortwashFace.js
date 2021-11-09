//2752번. 세수정렬

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

 function solution(input){
    const data = input.split(" ")
    return data.sort((a, b) => a - b).join(" ")
 }
 
 const input = "4 1 2"

 console.log(solution(input))