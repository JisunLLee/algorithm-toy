function num1() {
    /**
     * Hello World
     문제
     Hello World!를 출력하시오.

     입력
     없음

     출력
     Hello World!를 출력하시오.
     * */
    console.log("Hello World!")
}
function num2() {
    /**
     * We love kriii
     문제
     ACM-ICPC 인터넷 예선, Regional, 그리고 World Finals까지 이미 2회씩 진출해버린 kriii는 미련을 버리지 못하고 왠지 모르게 올 해에도 파주 World Finals 준비 캠프에 참여했다.

     대회를 뜰 줄 모르는 지박령 kriii를 위해서 격려의 문구를 출력해주자.

     입력
     없음

     출력
     두 줄에 걸쳐 "강한친구 대한육군"을 한 줄에 한 번씩 출력한다.
     * */
    console.log("강한친구 대한육군")
    console.log("강한친구 대한육군")
}
function num3() {
    /**
     * 고양이
     문제
     아래 예제와 같이 고양이를 출력하시오.

     입력
     없음.

     출력
     \    /\
     )  ( ')
     (  /  )
     \(__)|
     * */
    console.log("\\    /\\")
    console.log(" )  ( ')")
    console.log("(  /  )")
    console.log(" \\(__)|")
//또는. 띄어쓰기 조심
    console.log(`\\    /\\
 )  ( ')
(  /  )
 \\(__)|`);
}

function num4() {
    /**
     * 개
     문제
     아래 예제와 같이 개를 출력하시오.

     입력
     없음.

     출력
     개를 출력한다.
     |\_/|
     |q p|   /}
     ( 0 )"""\
     |"^"`    |
     ||_/=\\__|
     * */
    console.log("|\\_/|")
    console.log("|q p|   /}")
    console.log("( 0 )\"\"\"\\")
    console.log("|\"^\"`    |")
    console.log("||_/=\\\\__|")
//또는. 띄어쓰기 조심
    console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|`);
}
function num5() {
    /**
     * A+B
     문제
     두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

     출력
     첫째 줄에 A+B를 출력한다.
     * */
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A + B);
}

function num6() {
    /**
     * A-B
     문제
     두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

     출력
     첫째 줄에 A-B를 출력한다.
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A - B);
}

function num7() {
    /**
     * A×B
     문제
     두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

     출력
     첫째 줄에 A×B를 출력한다.
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A * B);
}

function num8() {
    /**
     * A/B
     문제
     두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

     출력
     첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A / B);
}

function num9() {
    /**
     * 사칙연산
     문제
     두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

     입력
     두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

     출력
     첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

     예제
     input 7 3
     return 10 4 21 2 1
     * */

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);

    console.log(A + B);
    console.log(A - B);
    console.log(A * B);
    console.log(Math.floor(A / B));
    console.log(A % B);
}

function num10() {
    /**
     * 나머지
     문제
     (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?

     (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

     세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

     입력
     첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

     출력
     첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

     예제
     input 5 8 4
     return 1 1 0 0
     * */
    //
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    const C = parseInt(input[2]);

    console.log((A+B)%C);
    console.log(((A%C) + (B%C))%C);
    console.log((A*B)%C);
    console.log(((A%C) * (B%C))%C);
}

function num11() {
    /**
     * 곱셈
     문제
     (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
            4 7 2 ------(1)
          X 3 8 5 ------(2)
    -------------
          2 3 6 0 ------(3)
        3 7 7 6   ------(4)
      1 4 1 6     ------(5)
     -------------
      1 8 1 7 2 0 ------(6)

     (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

     입력
     첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

     출력
     첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

     예제
     input 472 385
     return 2360 3776 1416 181720
     * */
    const fs = require("fs");
    const input = fs.readFileSync("/dev/stdin").toString().split("\n")

    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    const C = B.toString().split('');

    console.log(A*Number(C[2]));
    console.log(A*Number(C[1]));
    console.log(A*Number(C[0]));
    console.log(A * B);
}


console.log(num4())