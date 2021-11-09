//2309번 일곱 난쟁이

// const fs = require('fs');
// const data = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(i => parseInt(i));
function solution(data){
    data.sort((a, b) => a - b);
    const sum = data.reduce((acc, crr) => (acc = acc + crr), 0)
    const additional = sum - 100 ;
    return removeFakeDwarfs(data, additional);
}

function removeFakeDwarfs(data, additional){
    let i = 0;
    let realDwarf
    let complite = false;
    while (i <= 8){
        if (complite) break;
        let j = i+1
        while(j <= 9) {
            if(data[i]+data[j] === additional){
                const dwarf1 = data[i]
                const dwarf2 = data[j];
                realDwarf = data.filter(e => e != dwarf1 && e != dwarf2);
                complite = true
                break;
            }
            j++
        }
        i++
    }
    return realDwarf;
}

const data = [20, 7, 23, 19, 10, 15, 25, 8, 13]
console.log(solution(data).join(' '))