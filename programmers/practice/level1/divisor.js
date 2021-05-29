/**
 약수의 개수와 덧샘

 문제 설명
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000

입출력 예
left    13
right	17
result  43

입출력 예
left	24
right	27
result  52

 */

// 시간 복잡도가 너무 복잡하다.
function solution0(left, right) {
    let answer = 0;

    for(left; left <= right; left++){
        const divisor = []
        for (let i = 1; i <= left; i ++){
            left % i ? 0 : divisor.push(i)
        }
        if(divisor.length){
            divisor.length % 2 ? answer -= left : answer += left
        }
    }
    return answer
}
console.log(2 % 2)

function solution(left, right) {
    let answer = 0;

    for(left; left <= right; left++){
        Math.sqrt(left) % 1 ? answer += left : answer -= left
    }
    return answer
}

console.log(solution0(1, 2))