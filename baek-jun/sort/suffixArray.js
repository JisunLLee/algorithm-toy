//11656번 접미사 배열

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


function solution(input){
    let answer = [];
    for(let i = 0; i < input.length; i++){
        answer.push(input.slice(i));
    }
    answer.sort();
    answer.map(v=> console.log(v));
}


const input = ["baekjoon"]
solution(input[0]);