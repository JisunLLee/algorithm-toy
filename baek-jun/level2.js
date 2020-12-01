/**
 * Level2 if문
 * 총 5문제.
*/


function num1() {
/**
 * 두 수 비교하기 (1330번)
 문제
 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

 입력
 첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.

 출력
 첫째 줄에 다음 세 가지 중 하나를 출력한다.

 A가 B보다 큰 경우에는 '>'를 출력한다.
 A가 B보다 작은 경우에는 '<'를 출력한다.
 A와 B가 같은 경우에는 '=='를 출력한다.
 제한
 -10,000 ≤ A, B ≤ 10,000


 예제 1
 input 1 2
 return <

 예제 2
 input 10 2
 return >

 예제 3
 input 5 5
 return ==
 * */
    const fs = require("fs")
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = Number(input[0]);
    const B = Number(input[1]);

    if (A < B) console.log("<")
    if (A > B) console.log(">")
    if (A === B) console.log("==")
}

function num2() {
    /**
     * 시험 성적 (9498번)
     문제
     시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

     출력
     시험 성적을 출력한다.


     예제
     input 100
     return A

     * */
    const fs = require("fs")
    const input = fs.readFileSync('/dev/stdin');


    if (90 <= input && input <= 100) console.log("A")
    if (80 <= input && input <= 89) console.log("B")
    if (70 <= input && input <= 79) console.log("C")
    if (60 <= input && input <= 69) console.log("D")
    if (input <= 59) console.log("F")

}

function num3() {
    /**
     * 윤년 (2753번)
     문제
     연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

     윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

     예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

     입력
     첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.

     출력
     첫째 줄에 윤년이면 1, 아니면 0을 출력한다.


     예제1
     input 2000
     return 1

     예제2
     input 1999
     return 0

     * */
    const fs = require("fs")
    const input = fs.readFileSync('/dev/stdin');

    const takes1 = input/4
    const takes2 = input/100
    const takes3 = input/400

    if (Number.isInteger(takes1) && !Number.isInteger(takes2)) console.log(1)
    else if (Number.isInteger(takes3)) console.log(1)
    else  console.log(0)

}

function num4() {
    /**
     * 사분면 고르기 (14681번)
     흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.

     <이미지>
     예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.

     점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

     입력
     첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)

     출력
     점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.


     예제1
     input 12 5
     return 1

     예제2
     input 9 -13
     return 4

     * */


    /**
    여기선 이상하게............ readFileSync 로 하면 런타임 에러가 뜬다.
    input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
    input = fs.readFileSync("/dev/stdin").toString().split("\n");
    input = fs.readFileSync("/dev/stdin").toString().split(" ");
    전부 해봤지만 런타임에러. 해당 문제는 readline 간다.
    */

    // 1 = 양수, 양수
    // 2 = 음수, 양수
    // 3 = 음수, 음수
    // 4 = 양수, 음수
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let input = [];

    rl.on('line', function (line) {
        input.push(line);
    }).on('close', function () {
        let x = Number(input[0]);
        let y = Number(input[1]);

        if (x > 0 && y > 0 ) console.log(1)
        else if (x < 0 && y > 0 ) console.log(2)
        else if (x < 0 && y < 0 ) console.log(3)
        else console.log(4)

        process.exit();
    });
}

function num5() {
    /**
     * 알람 시계 (2884번)
     문제
     상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.

     상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.

     이런 상근이를 불쌍하게 보던, 창영이는 자신이 사용하는 방법을 추천해 주었다.

     바로 "45분 일찍 알람 설정하기"이다.

     이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.

     현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

     입력
     첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.

     입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

     출력
     첫째 줄에 상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)


     예제1
     input 10 10
     return 9 25

     예제2
     input 0 30
     return 23 45

     예제3
     input 23 40
     return 22 55

     * */
    const fs = require("fs")
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');

    const hour = Number(input[0]);
    const min = Number(input[1]);


    let re_min = min - 45;
    let re_hour = hour;
    if (re_min < 0) {
        re_min = 60 + re_min
        re_hour = hour - 1
    }
    if (re_hour < 0)
        re_hour = 24 + re_hour

    console.log(re_hour, re_min)
}
num5(0, 0)