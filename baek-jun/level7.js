/**
 * Level7 함수
 * 총 3문제. 풀 수 있는 문제 2문제. (1번은 제출언어 제한으로 Js 는 불가.
 */

function Que2() {

    /**
     * 셀프넘버 (4673번)

     문제
     셀프 넘버는 1949년 인도 수학자 D.R. Kaprekar가 이름 붙였다. 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자.
     예를 들어, d(75) = 75+7+5 = 87이다.
     양의 정수 n이 주어졌을 때, 이 수를 시작해서 n, d(n), d(d(n)), d(d(d(n))), ...과 같은 무한 수열을 만들 수 있다.
     예를 들어, 33으로 시작한다면 다음 수는 33 + 3 + 3 = 39이고, 그 다음 수는 39 + 3 + 9 = 51, 다음 수는 51 + 5 + 1 = 57이다.
     이런식으로 다음과 같은 수열을 만들 수 있다.
     33, 39, 51, 57, 69, 84, 96, 111, 114, 120, 123, 129, 141, ...
     n을 d(n)의 생성자라고 한다. 위의 수열에서 33은 39의 생성자이고, 39는 51의 생성자, 51은 57의 생성자이다.
     생성자가 한 개보다 많은 경우도 있다. 예를 들어, 101은 생성자가 2개(91과 100) 있다.
     생성자가 없는 숫자를 셀프 넘버라고 한다. 100보다 작은 셀프 넘버는 총 13개가 있다. 1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97
     10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

     입력
     입력은 없다.

     출력
     10,000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 증가하는 순서로 출력한다.


     예제
     input
     return 1
     3
     5
     7
     9
     20
     31
     42
     53
     64
     |
     |       <-- a lot more numbers
     |
     9903
     9914
     9925
     9927
     9938
     9949
     9960
     9971
     9982
     9993

     * */

    let selfNums = []
    for (let i = 1; i <= 10000; i++) {
        selfNums.push(i);
    }

    for(let i = 1; i <= 10000; i++){
        const nums = i.toString().split('').map(v=> +v)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const constructor = nums.reduce(reducer, i)
        const idx = selfNums.indexOf(constructor)
        if (idx > -1) selfNums.splice(idx, 1)
    }
    selfNums.map(value => console.log(value))
}

function Que3(input) {

    /**
     * 한수 (1065번)

     문제
     어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.
     N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

     입력
     첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

     출력
     첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.


     예제1
     input 110
     return 99

     예제2
     input 1
     return 1

     예제3
     input 210
     return 105

     예제4
     input 1000
     return 144

     설명 : 각각의 수를 등차수열로 생각하라.

     * */

    // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
    let result = []
    for (let i = 1; i <= input; i++){
        if (i < 100) result.push(i)
        else {
            const numbers = i.toString().split('').map(v => +v)
            const diff = numbers[1]-numbers[0]
            if (numbers[2] === numbers[1] + diff) result.push(i)
        }
    }
    console.log(result.length)
}

// Que2()
// Que3(1000)