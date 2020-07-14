/**
 * Level8 문자열
 * 총 10문제.
 */

function Que1() {

    /**
     * 아스키코드 (11654번)

     문제
     알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

     입력
     알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

     출력
     입력으로 주어진 글자의 아스키 코드 값을 출력한다.

     예제 1
     input A
     return 65

     예제 2
     input B
     return 67

     예제 3
     input 0
     return 48

     예제 4
     input 9
     return 57

     예제 5
     input a
     return 97

     예제 6
     input z
     return 122

     * */

    /**
     * 1. require("fs") 런타임에러로 readline 사용
     * 2. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
     *   "문자열".charCodeAt([문자열 자릿수]); 사용.
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

        console.log(input[0].charCodeAt(0))
        process.exit();
    });
}

Que1("9")