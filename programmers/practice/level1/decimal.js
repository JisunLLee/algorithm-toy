/**
    소수 찾기
문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.

입출력 예
n       10
result  4
 */

//효용성 테스트에서 타임아웃
function solution(n){
let answer = 0

for(let i = 2; i <= n; i ++) {
    isPrime(i) ? answer += 1 : 0
}
return answer;
}

function isPrime(n) {
    if (n === 2) return true
    for (let i = 2; i*i <= n; i++){
        if(n%i === 0) {
            return false
        }
    }
    return true
}

function solution2(n){
    const primes = new Array(n).fill(true);
    primes[0] = false;
    for (let i = 2; i * i <= n; i ++){
        if(primes[i-1]) {
            for(let j = i*i; j <= n; j += i){
                primes[j-1] = false
            }
        }
    }
    return primes.filter(v=>v).length
}


console.log(solution2(10))