/**
 정수 재곱근 판별

 문제 설명
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

제한 사항
n은 1이상, 50000000000000 이하인 양의 정수입니다.

입출력 예
n       121	
return  144

입출력 예 설명
121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

 */


function solution(n) {
    if (n === 1) return 4
    if (isSquare(n)) return (isSquare(n) + 1) ** 2
    else return -1
}
function isSquare(n) {
    for(let i = 2; i <= n / 2; i ++) {
        if (i ** 2 === n) return i
    }
    return false
}

function solution2(n) {
    switch(n % Math.sqrt(n)) {
        case 0 : 
            return (Math.sqrt(n)+1) ** 2
        default :
            return -1
    }
}

console.log(solution2(4))

