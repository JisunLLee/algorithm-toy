/**
 자연수 뒤집어 배열로 만들기

 문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.

입출력 예
n       12345	
return  [5,4,3,2,1]
 */

function solution(n){
    const reverse = []
    const arr = n.toString().split("")
    for(let i = arr.length-1; i >= 0; i--){
        reverse.push(Number(arr[i]))
    }
    return reverse
}

function solution2(n) {
    const reverse = [];
    n = n+""
    for(let i = n.length-1; i >= 0; i --) {
        reverse.push(Number(n[i]))
    }
    return reverse
}

console.log(solution2(12345))