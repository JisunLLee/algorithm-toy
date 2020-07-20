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
     * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
     *   "문자열".charCodeAt([문자열 자릿수]); 사용.
    * */
    const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    console.log(input[0].charCodeAt(0))
}
function Que2(input) {

    /**
     * 숫자의 합 (11720번)

     문제
     N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

     출력
     입력으로 주어진 숫자 N개의 합을 출력한다.

     예제 1
     input
     1
     1
     return 1

     예제 2
     input
     5
     54321
     return 15

     예제 3
     input
     25
     7000000000000000000000000
     return 7

     예제 4
     input
     11
     10987654321
     return 46

     * */

    // const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    let sum = 0;
    input[1].toString().split('').map(v=>+v).map(value => sum = sum+value)
    console.log(sum)
}

function Que3(S) {

    /**
     * 알파벳 찾기 (10809번)

     문제
     알파벳 소문자로만 이루어진 단어 S가 주어진다.
     각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.

     출력
     각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치, ... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다.
     만약, 어떤 알파벳이 단어에 포함되어 있지 않다면 -1을 출력한다. 단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치이다.

     예제 1
     input baekjoon
     return 1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1

     * */

    // const S = require("fs").readFileSync("/dev/stdin").toString().trim();

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let setup = {}
    alphabet.split('').map((value, index) => {
        setup[value] = {idx: index, data: -1}
    })

    S.split('').map((value, index) => {
        if (index === 0) setup[value]['data'] = 0
        if (setup[value]['data'] === -1) {
            setup[value]['data'] = index
        }
    })

    let answer = ''
    for (const [key, value] of Object.entries(setup)) {
        if (answer !== '') answer = answer + " " +value['data']
        else  answer = answer + value['data']
    }
    console.log(answer)

}

// Que1("9")
// Que2(['25', '10987654321'])
// Que3('baekjoon')