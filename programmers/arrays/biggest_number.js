/**
    개요
 문제 설명

 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

 제한 사항

 * numbers의 길이는 1 이상 100,000 이하입니다.
 * numbers의 원소는 0 이상 1,000 이하입니다.
 * 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

 입출력 예

 * numbers : [6, 10, 2]
 * return : 6210
 *
 * numbers : [3, 30, 34, 5, 9]
 * return : 9534330

 */

function solution(numbers) {
    // const answer = numbers.sort((a,b) => (b.toString() + a.toString()) - (a.toString() + b.toString()))
    // console.log(answer.join("") == 0 ? "0" : answer.join(""))
}
    function test(numbers) {
    console.log('test')
    // console.log(numbers.sort()) // 3, 30, 34, 5, 9
    // console.log(numbers.sort((a,b) => (b + a)))  // 3, 30, 5, 34, 9
    // console.log(numbers.sort((a,b) => (b.toString() + a.toString())))  // 3, 30, 5, 34, 9
    // console.log(numbers.sort((a,b) => (a.toString() - b.toString())))  // 3, 5, 9, 30, 34
    // console.log(numbers.sort((a,b) => (b + a) - (a + b)) )  // 3, 30, 5, 34, 9
    // console.log(numbers.sort((a,b) => (b.toString() + a.toString()) - (a.toString() + b.toString())) )  //9, 5, 34, 3, 30
    // console.log(numbers.sort((a,b) => (b - a)))  // 34, 30, 9, 5, 3
    // console.log('reverse')
    // console.log(numbers.reverse())
    // console.log(numbers.reverse((a,b) => (a-b)))
}


// const numbers = [6,10,2]
// const numbers = [3, 30, 5, 34, 9]
// // solution(numbers)
// test(numbers)
// console.log(contents.indexOf(content));
// console.time('solution');
// console.log(solution(numbers));
// console.timeEnd("solution");

function solution2(numbers) {
    const answer = numbers.sort((a,b)=> (b.toString() + a.toString()) - (a.toString() + b.toString()))
        return answer.reduce((acc, crr)=>( acc === 0 ? acc = crr : acc = acc + "" + crr),0)+""
    }
    // const input = [3, 30, 34, 5, 9, 42]
    const input = [979, 97, 978, 81, 818, 817]
console.log(solution2(input))