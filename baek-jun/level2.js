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
num3(2012)

// console.log(20000 / 400)
// console.log(2012 / 4)