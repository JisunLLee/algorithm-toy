/**
 * Level3 for문
 * 총 11문제.
 */


function Num1() {
    /**
     * 구구단 (2739번)

     문제
     N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

     입력
     첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

     출력
     출력형식과 같게 N*1부터 N*9까지 출력한다.

     예제
     input 2
     return
     2 * 1 = 2
     2 * 2 = 4
     2 * 3 = 6
     2 * 4 = 8
     2 * 5 = 10
     2 * 6 = 12
     2 * 7 = 14
     2 * 8 = 16
     2 * 9 = 18
     * */

    // 주의점 : input 은 Number 가 아니다.
    const fs = require('fs');
    const input = Number(fs.readFileSync('/dev/stdin'));

    for (let i = 1; i <10; i ++){
        console.log(input,"*",i,"=",input * i)
    }
}


function Num2() {
    /**
     * A+B - 3 (10950 번)

     문제
     두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 테스트 케이스의 개수 T가 주어진다.

     각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

     출력
     각 테스트 케이스마다 A+B를 출력한다.

     예제
     input
     5
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
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split('\n');

    const count = parseInt(input[0]);
    for (let i = 1; i <= count; i ++){
        const values = input[i].split(' ');
        console.log(Number(values[0]) + Number(values[1]))
    }

}
// Num2(["5", "1 1", "2 3", "3 4", "9 8", "5 2"])

function Num3() {
    /**
     * A×B

     예제
     input
     return
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A * B);
}

function Num4() {
    /**
     * A×B

     예제
     input
     return
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A * B);
}

function Num5() {
    /**
     * A×B

     예제
     input
     return
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A * B);
}

function Num6() {
    /**
     * A×B

     예제
     input
     return
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A * B);
}

function Num7() {
    /**
     * A×B

     예제
     input
     return
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A * B);
}

function Num8() {
    /**
     * A×B

     예제
     input
     return
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A * B);
}

function Num9() {
    /**
     * A×B

     예제
     input
     return
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A * B);
}

function Num10() {
    /**
     * A×B

     예제
     input
     return
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A * B);
}

function Num11() {
    /**
     * A×B

     예제
     input
     return
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A * B);
}