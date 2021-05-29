/**
 3진법 뒤집기

 문제 설명
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.

입출력 예 #1
n	    45
result  7

입출력 예 #2
n	    125
result  229

입출력 예 설명

입출력 예 #1
n (10진법)	    45
n (3진법)	    1200
앞뒤 반전(3진법)  0021
10진법으로 표현   7

 */

function solution0(n) {
    const answer = []
    const ternary = n.toString(3).split('')
    const lengthTernary = ternary.length

    for(let i = 0; i < lengthTernary; i++){
        answer.push(ternary.pop())
    }
    return parseInt( answer.join(''), 3)
}

function solution(n){
    return parseInt(n.toString(3).split('').reverse().join(''),3)
}

console.log(solution(125))
