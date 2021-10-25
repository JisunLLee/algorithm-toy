// 10815번 숫자 카드

// const fs = require('fs');
// const [input1 , input2, input3, input4 ] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
function solution(N, M) {
    const cards =  new Set(N.split(' '));
    const deck = M.split(' ');
    let answer = []

    for( value of deck)  {
        cards.has( value ) ? answer.push(1) : answer.push(0) 
    }
    return answer.join(' ');
}

function solution2(N, M) {
    const cards =  new Set(N.split(' '));
    const deck = new Set(M.split(' '));
    let answer = []

    for( value of deck)  {
        cards.has( value ) ? answer.push(1) : answer.push(0) 
    }
    return answer.join(' ');
}

function solution3(lengthN, N, lengthM, M) {

    const cards =  N.split(' ').map(Number)
    const deck =  M.split(' ').map(Number)

    let answer = []
    const map = new Map();
    for (i in cards) {
        map.set(cards[i])
    }
    for( i in deck)  {
        map.has( deck[i] ) ? answer.push(1) : answer.push(0) 
    }
    return answer.join(' ');
}


input1 = 5
input2 = "6 3 2 10 -10"
input3 = 8
input4 = "10 9 -5 2 3 4 5 -10"

console.time('solution');
console.log(solution(input2, input4));
console.timeEnd("solution");

console.time('solution2');
console.log(solution2(input2, input4));
console.timeEnd("solution2");

console.time('solution3');
console.log(solution3(input1, input2, input3, input4));
console.timeEnd("solution3");