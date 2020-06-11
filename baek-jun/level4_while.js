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


function Que2 () {
    /**
     * 	A+B - 4 (10951번)

     문제
     두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

     입력
     입력은 여러 개의 테스트 케이스로 이루어져 있다.
     각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

     출력
     각 테스트 케이스마다 A+B를 출력한다.

     예제
     input
     1 1
     2 3
     3 4
     9 8
     5 2
     return
     2
     5
     7
     17
     7


     이상하게 fn()으로 하면 에러남. readline 으로 받아야 작동 됨.
     * */

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let input = [];

    rl.on('line', function (line) {
        input.push(line);
    }).on('close', function () {

        let i = 0
        while (i < input.length){
            const num = input[i].split(" ");
            console.log( Number(num[0]) + Number(num[1]))
            i++;
        }

        process.exit();
    });
    // 사용 시
    // String : input[0]
    // Number :  parseInt(input[0]); || Number(input[0])
}

function Que3 (input) {
    /**
     * 	더하기 사이클 (1110번)

     문제
     0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다.
     먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다.
     그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 다음 예를 보자.

     26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다.
     새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.

     위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.

     N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.

     입력
     첫째 줄에 N이 주어진다. N은 0보다 크거나 같고, 99보다 작거나 같은 정수이다.

     예제 1
     input 26
     return 4

     예제 2
     input 55
     return 4

     예제 3
     input 1
     return 60

     * */


    let compareNum = require('fs').readFileSync('/dev/stdin').toString();
    const origin = parseInt(compareNum)
    let count = 0

    if(origin < 10){
        compareNum = '0' + compareNum
    }
    while (true){
        count++
        const splitInput = compareNum.split('')
        compareNum =  splitInput[1].toString() + ((parseInt(splitInput[0]) + parseInt(splitInput[1])) % 10).toString()

        if(origin === parseInt(compareNum)){
            console.log(count)
            break;
        }
    }
}


// Que1(['1 1', '2 3', '3 4', '9 8', '5 2', '0 0'])
// Que2(['1 1', '2 3', '3 4', '9 8', '5 2'])
// Que3('10')