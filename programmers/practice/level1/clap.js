/**
 
수박수박수박수박수박수?

문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

제한 조건
n은 길이 10,000이하인 자연수입니다.

입출력 예#1
n	        3
return      "수박수"

입출력 예#2
n	        4
return      "수박수빅"


 */

function solution(n) {
    var answer = '';
    for (let i = 1; i <= n; i++) {
        i % 2 ? answer += "수" : answer += "박"
    }

    return answer;
}

function solution2(n) {
    return "수박".repeat(n).slice(0, n)
}
console.log(solution2(4))