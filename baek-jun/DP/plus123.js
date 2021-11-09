//9095번 1,2,3 더하기

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input){
    const N = Number(input.shift());
    const biggest = input.slice().sort((a, b) => a - b).pop()
    const answer = new Array(biggest).fill(0);
    answer[0] = 1;
    answer[1] = 2;
    answer[2] = 4;

    getPlusSize(answer, biggest);
    input.map(v => console.log(answer[v-1]))
}

function getPlusSize(arr, target){

    for(let i =3; i <target; i++){
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
    }
    return arr;
}

const input = [3, 4, 7, 10];
solution(input);

/**
 * 
 1 <- 1
 1

 2 <- 2
 1 1
 2

 3 <- 4
 1 1 1
 1 2
 2 1
 3

 4 <- 7
 1 1 1 1
 1 1 2
 1 2 1
 2 1 1
 2 2
 1 3
 3 1

 5 <- 13
 1 1 1 1 1
 1 1 1 2
 1 1 2 1
 1 2 1 1
 1 2 2
 2 1 2
 2 1 1 1 
 2 2 1
 1 1 3
 2 3
 3 1 1
 1 3 1
 3 2

a(n-1) + a(n-2) + a(n-3) 
 **/
