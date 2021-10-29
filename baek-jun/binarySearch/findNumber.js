//1920번 수 찾기

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


function solution(input){
    const N = Number(input[0]);
    const baseNumbers = input[1].split(' ').map(number => parseInt(number));
    const M = Number(input[2]);
    const compareNumbers = input[3].split(' ').map(number => parseInt(number));
    let answer = [];

    baseNumbers.sort( (a, b) => a - b);
    compareNumbers.map( (v, i) => {

        binarySearch(baseNumbers, v, 0, N-1) === false ? answer.push(0) : answer. push(1);
    })

    return answer.join('\n')
}

function binarySearch(arr, target, start, end){
    let mid;
    while(start <= end){
        mid = Math.floor((start + end) / 2);
        
        if (arr[mid] === target) return mid
        else if (arr[mid] > target) end = mid - 1;
        else start = mid + 1
    }
    return false
}

const input = [5, '4 1 5 2 3', 5, '1 3 7 9 5'];

console.log(solution(input))