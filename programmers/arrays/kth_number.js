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



