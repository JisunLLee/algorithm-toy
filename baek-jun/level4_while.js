/**
 * Level4 while 문
 * 총 3문제.
 */

function Que1 () {
    /**
     * 	A+B - 5 (10952번)

     문제
     두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

     입력
     입력은 여러 개의 테스트 케이스로 이루어져 있다.
     각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
     입력의 마지막에는 0 두 개가 들어온다.

     출력
     각 테스트 케이스마다 A+B를 출력한다.

     예제
     input
     1 1
     2 3
     3 4
     9 8
     5 2
     0 0
     return
     2
     5
     7
     17
     7
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split("\n");

    let i = 0
    while (i < input.length){
        const num = input[i].split(" ");
        const sum = Number(num[0]) + Number(num[1])
        if (sum > 0) {
            console.log(sum)
        }
        i++;
    }
}


Que1(['1 1', '2 3', '3 4', '9 8', '5 2', '0 0'])