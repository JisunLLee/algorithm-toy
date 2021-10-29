//2110번  공유기 설치.

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input){
    const [N, C]= input.shift().split(' ').map(Number);

    const house = input.map(Number).sort((a, b) => a - b);

    let min = 1;
    let max = house[N-1] - house[0];

    let result = 0;

    while(min <= max){
        const mid = Math.floor((min + max) / 2);

        let cur_home = house[0];
        let count = 1;

        for(let i = 1; i < house.length; i++){
            if(house[i] - cur_home >= mid){
                count += 1;
                cur_home = house[i];
            }
        }

        if(count >= C) {
            if(result < mid) {
                result = mid;
                min = mid + 1;
            }
        }
        else {
            max = mid -1;
        }
    }


    return result;
}

const input =['5 3', 1, 2, 8, 4, 9]
console.log(solution(input))