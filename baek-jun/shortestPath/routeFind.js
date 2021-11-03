// 경로찾기 1140번 // 플로이드 워셜
/**
 0 -> 1
 1 -> 2
 2 -> 1
 
 

 0 -> 3
 1 -> 6
 3 -> 4
 3 -> 5
 4 -> 0
 5 -> 6
 6 -> 2
 */


//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


function solution(input) {
    const data = [];
    const N = input.shift();
    for(let i = 0; i < N; i++){
        data[i] = input[i].split(' ').map(Number)
    }

    for(let k = 0; k < N; k++){
        for(let i = 0; i < N; i++){
            for(let j = 0; j < N; j++){
                if (data[i][k] === 1 && data[k][j]===1) {
                    data[i][j] = 1;
                }
            }
        }
    }

    
    for(let i = 0; i < N; i++){
        console.log(data[i].join(' '));
    }
}


const input = [7, 
    '0 0 0 1 0 0 0',
    '0 0 0 0 0 0 1',
    '0 0 0 0 0 0 0',
    '0 0 0 0 1 1 0',
    '1 0 0 0 0 0 0',
    '0 0 0 0 0 0 1',
    '0 0 1 0 0 0 0']

// const input = [3,
//     '0 1 0',
//     '0 0 1',
//     '1 0 0']

solution(input)