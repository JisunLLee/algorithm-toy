//2839번 설탕배달

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin');

function solution(input){

    let count = 0
    while( true) {
        if(input % 5 === 0){
            console.log(input / 5 + count);
            break;
        }  
        if (input < 0){
            console.log(-1);
            break;
        }
        count ++;
        input -= 3
    }
}

const input = 19;

solution(input);
