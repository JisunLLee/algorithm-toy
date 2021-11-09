// 이코테 동빈나 떡볶이 문제. https://youtu.be/94RC-DsGMLo

function solution(input){
    const dduckLengh = Number(input[0].split(' ')[0])
    const hight = Number(input[0].split(' ')[1])
    const dduck = input[1].split(' ').sort((a, b) => a - b).map(num => parseInt(num))

    let start = dduck[0];
    let end = dduck[dduckLengh-1]

    while(start <= end){
        let mid = (start + end) / 2
        answer = getLength(dduck, mid)
        if (answer === hight) break;
        else if(answer > hight) start++;
        else start--;
    }

    return answer;
}

function getLength(arr, start) {
    let length = 0;
    arr.map(v=> {
        v - start <=0 ? length = length + 0 : length = length + v - start
    })
    return length;
}

input = ['4 6', '19 15 10 17']
console.log(solution(input))


