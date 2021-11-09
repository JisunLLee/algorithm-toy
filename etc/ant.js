// 이코테 동빈나 개미전사 문제. https://youtu.be/5Lu34WIx2Us

function solution(input){
    const lenght = Number(input[0]);
    const warehouse = input[1].split(' ').map(num => parseInt(num));
    const answer = [];

    answer.push(foodCount(warehouse, 0, 0));
    answer.push(foodCount(warehouse, 0, 1));
    
    answer.sort((a, b) => b - a )

    return answer[0]

}

function foodCount(arr, sum, start){
    sum = sum + arr[start]
    if(arr[start+2]) {
        return foodCount(arr, sum, start+2)
    }
    else {
        return sum;
    }

}

const input = [4, '1 3 1 5']
console.log(solution(input))
