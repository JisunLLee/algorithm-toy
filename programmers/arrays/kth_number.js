/**
    문제 개
 문제 설명


 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

 1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 3. 2에서 나온 배열의 3번째 숫자는 5입니다.

 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

 제한사항

 * array의 길이는 1 이상 100 이하입니다.
 * array의 각 원소는 1 이상 100 이하입니다.
 * commands의 길이는 1 이상 50 이하입니다.
 * commands의 각 원소는 길이가 3입니다.

 입출력 예

 * array : [1, 5, 2, 6, 3, 7, 4]
 * commands : [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
 * return : [5, 6, 3]

 입출력 예 설명
 [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
 [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
 [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
 */

function FistIdea(array, commands) {
    let answer = [];
    for (let count = 0; count < commands.length; count++){
        let copy_array = Array.prototype.slice.call(array);
        const i = commands[count][0];
        const j = commands[count][1];
        const k = commands[count][2];
        copy_array.splice(j,array.length);
        copy_array.splice(0,i-1);
        copy_array.sort()
        answer.push(copy_array[k-1])
    }
    return answer;
}

// 속도가 가장 빠른 답. (내가 작성한 답안 중에)
function FirstSolution(array, commands) {
    let answer = [];
    for (let count = 0; count < commands.length; count++){
        const i = commands[count][0];
        const j = commands[count][1];
        const k = commands[count][2];
        let copy_array = array.slice(i-1,j);
        copy_array.sort((a, b) => a - b)
        answer.push(copy_array[k-1])
    }
    return answer;
}

function shortForSolution(array, commands) {
    let answer = [];
    for (let value of commands){
        answer.push(array.slice(value[0]-1,value[1]).sort((a,b) => a-b)[value[2]-1])
    }
    return answer
}

function SecondSolution(array, commands) {
    return commands.map(x=>{
        let arr = array.slice(x[0]-1, x[1])
        arr.sort((a, b) => a - b);
        return arr[x[2]-1]
    })
}

// 최종 제출 답
function solution(array, commands) {
    return commands.map(([start, end, position])=>{
        return array.slice(start-1, end).sort((a, b) => a - b)[position-1]
    })
}



const array = [1, 5, 2, 6, 3, 7, 4, 5];
// const array = [1,10,101,61,45];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3], [4, 4, 1]];
// const commands = [[2, 5, 3]];

console.time('FistIdea');
console.log(FistIdea(array, commands));
console.timeEnd("FistIdea");
// console.log(solution(array, commands));

console.time('FirstSolution');
console.log(FirstSolution(array, commands));
console.timeEnd("FirstSolution");

console.time('shortForSolution');
console.log(shortForSolution(array, commands));
console.timeEnd("shortForSolution");

console.time('SecondSolution');
console.log(SecondSolution(array, commands));
console.timeEnd("SecondSolution");

console.time('solution');
console.log(solution(array, commands));
console.timeEnd("solution");



