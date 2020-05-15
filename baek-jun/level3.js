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
     * 합 (8393 번)

     문제
     n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

     입력
     첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

     출력
     1부터 n까지 합을 출력한다.

     예제
     input 3
     return 6
     * */

    const fs = require('fs');
    const input = Number(fs.readFileSync('/dev/stdin'));

    let result = 0;
    for (let i = 1; i <= input; i++) {
        result = result + i
    }
    console.log(result);
}
// Num3(3);

function Num4() {
    /**
     * 빠른 A + B (15552번)

     문제
     본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.

     C++을 사용하고 있고 cin/cout을 사용하고자 한다면, cin.tie(NULL)과 sync_with_stdio(false)를 둘 다 적용해 주고, endl 대신 개행문자(\n)를 쓰자. 단, 이렇게 하면 더 이상 scanf/printf/puts/getchar/putchar 등 C의 입출력 방식을 사용하면 안 된다.

     Java를 사용하고 있다면, Scanner와 System.out.println 대신 BufferedReader와 BufferedWriter를 사용할 수 있다. BufferedWriter.flush는 맨 마지막에 한 번만 하면 된다.

     Python을 사용하고 있다면, input 대신 sys.stdin.readline을 사용할 수 있다. 단, 이때는 맨 끝의 개행문자까지 같이 입력받기 때문에 문자열을 저장하고 싶을 경우 .rstrip()을 추가로 해 주는 것이 좋다.

     또한 입력과 출력 스트림은 별개이므로, 테스트케이스를 전부 입력받아서 저장한 뒤 전부 출력할 필요는 없다. 테스트케이스를 하나 받은 뒤 하나 출력해도 된다.

     자세한 설명 및 다른 언어의 경우는 이 글에 설명되어 있다.

     이 블로그 글에서 BOJ의 기타 여러 가지 팁을 볼 수 있다.

     입력
     첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

     출력
     각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

     예제
     input
     5
     1 1
     12 34
     5 500
     40 60
     1000 1000

     return
     2
     46
     505
     100
     2000
     * */

    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let answer = '';

    rl.on("line", function(line) {
        const input = line.split(' ');
        if (input.length === 2 ) {
            answer += Number(input[0]) + Number(input[1]) + '\n';
        }
    }).on("close", function() {
        console.log(answer);
        process.exit();
    });


}
// Num4(["5", "1 1", "12 34", "5 500", "40 60" ,"1000 1000"])


function Num5() {
    /**
     * N 찍기 (2741번)

     문제
     자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

     출력
     첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

     예제
     input 5
     return 1   2     3     4     5
     * */

    const fs = require('fs');
    const input = Number(fs.readFileSync('/dev/stdin'));

    let answer = '';
    for (let i = 1; i <= input; i ++) {
        answer += i + "\n";
    }

    console.log(answer);
}
// Num5(9)

function Num6() {
    /**
     * 기찍 N (2742번)

     문제
     자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

     출력
     첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

     예제
     input 5
     return 5 4 3 2 1
     * */

    const fs = require('fs');
    let input = Number(fs.readFileSync('/dev/stdin'));

    let answer = '';
    for (input; input >0; input--) {
        answer += input + "\n";
    }

    console.log(answer);
}
// Num6(8);

function Num7() {
    /**
     * A+B - 7 (11021번)

     문제
     두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 테스트 케이스의 개수 T가 주어진다.

     각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

     출력
     각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.

     예제
     input
     5
     1 1
     2 3
     3 4
     9 8
     5 2
     return
     Case #1: 2
     Case #2: 5
     Case #3: 7
     Case #4: 17
     Case #5: 7
     * */

    const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

    for (let i = 1; i <= Number(input[0]); i ++){
        const values = input[i].split(' ');
        console.log(`Case #${i}: ${Number(values[0]) +Number(values[1])}`)
    }
}
Num7([ "5",    "1 1",    "2 3",    "3 4",    "9 8",    "5 2"])
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